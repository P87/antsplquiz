import * as mysql from "./mysql";
import logger from "./logger";
import { PowerToken } from "../../types";

export const savePowerToken = async (
  powerToken: PowerToken,
  questionId: number,
  userId: number
) => {
  logger.info("Updating user's power token", {
    questionId,
    userId,
    powerToken,
  });

  /* If the user is clever they could trick the system here to change their power token, but for now
  we will trust them. */
  if (powerToken) {
    if (
      !(await mysql.query(
        "UPDATE `power_tokens` SET `question_id` = NULL, `date_applied` = NOW() WHERE `question_id` = ? AND `user_id` = ?",
        [questionId, userId]
      ))
    ) {
      logger.error("Error updating previously set power token", {
        tokenId: powerToken.id,
        questionId,
      });
      return false;
    }
    if (
      !(await mysql.query(
        "UPDATE `power_tokens` SET `question_id` = ?, `date_applied` = NOW() WHERE `id` = ?",
        [questionId, powerToken.id]
      ))
    ) {
      logger.error("Error updating newly set power token", {
        tokenId: powerToken.id,
        questionId,
      });
      return false;
    }
  } else {
    if (
      !(await mysql.query(
        "UPDATE `power_tokens` SET `question_id` = NULL, `date_applied` = NOW() WHERE `user_id` = ? AND `question_id` = ?",
        [userId, questionId]
      ))
    ) {
      logger.error("Error updating unspent power token", { questionId });
      return false;
    }
  }

  return true;
};
