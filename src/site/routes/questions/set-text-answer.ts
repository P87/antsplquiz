import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

export default async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  const { answer, powerToken } = req.body;

  logger.info("Attempting answer insert", {
    userId: req.session.userId,
    displayName: req.session.displayName,
    questionId,
    answer,
  });

  if (!answer) {
    return res.json({ success: false, message: "No answer supplied" });
  }

  const question = await mysql.query(
    "SELECT `deadline` FROM `questions` WHERE `id` = ?",
    [+questionId]
  );

  if (!question) {
    return res.json({
      success: false,
      message: "There was an error, please try again",
    });
  }

  if (new Date(question[0].deadline) < new Date()) {
    return res.json({
      success: false,
      message: "The deadline for this question has passed.",
    });
  }

  const update = await mysql.query(
    "UPDATE `answers` SET `final_answer` = false WHERE `user_id` = ? AND `question_id` = ?",
    [req.session.userId!, questionId]
  );

  if (!update) {
    return res.json({
      success: false,
      message: "Something went wrong saving your answer, please try again",
    });
  }

  const insert = await mysql.insertOne(
    "INSERT INTO `answers` SET answer = ?, question_id = ?, user_id = ?",
    [answer, questionId, req.session.userId!]
  );

  if (!insert) {
    res.json({ success: false, message: "Error saving answer" });
  }

  logger.info("Updating user's power token", {
    questionId,
    userId: req.session.userId,
    powerToken,
  });

  /* If the user is clever they could trick the system here to change their power token, but for now
  we will trust them. */
  const powerTokenUpdate = powerToken
    ? await mysql.query(
        "UPDATE `power_tokens` SET `question_id` = ?, `date_applied` = NOW() WHERE `id` = ?",
        [+questionId, powerToken.id]
      )
    : await mysql.query(
        "UPDATE `power_tokens` SET `question_id` = NULL, `date_applied` = NOW() WHERE `user_id` = ? AND `question_id` = ?",
        [req.session.userId!, +questionId]
      );

  if (!powerTokenUpdate) {
    logger.error("Error updating power token", { tokenId: powerToken.id });
    return res.json({ success: false });
  }

  return res.json({ success: true });
};
