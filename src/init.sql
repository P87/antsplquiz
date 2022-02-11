CREATE database IF NOT EXISTS antsplquiz;
USE antsplquiz;
CREATE TABLE IF NOT EXISTS `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(30) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`display_name` VARCHAR(255) NOT NULL,
	`is_admin` BOOLEAN DEFAULT false,
	`paid` BOOLEAN DEFAULT false,
	`confirmed` BOOLEAN NOT NULL DEFAULT false,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `leagues` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(30) NOT NULL,
	`passcode` VARCHAR(255) NOT NULL,
	`owner_id` INT,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `users_leagues` (
	`user_id` INT NOT NULL,
	`league_id` INT NOT NULL,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS `questions` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`league_id` INT NOT NULL,
	`question` TEXT NOT NULL,
	`answer_set_id` INT,
	`correct_answer_set_id` INT,
	`answer_type` VARCHAR(15),
	`answer_amount` INT NOT NULL,
	`correct_answer` TEXT,
	`deadline` TIMESTAMP NOT NULL,
	`points` INT NOT NULL,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	KEY `deadline` (`deadline`) USING BTREE,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `answer_sets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `set_id` (`name`)
);
CREATE TABLE IF NOT EXISTS `answer_set_answers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`answer` VARCHAR(255) NOT NULL,
	`set_id` INT,
	PRIMARY KEY (`id`),
	UNIQUE KEY `answer_id` (`answer`, `set_id`)
);
CREATE TABLE IF NOT EXISTS `answers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`answer` VARCHAR(255),
	`answer_set_id` INT,
	`question_id` INT,
	`user_id` INT NOT NULL,
	`final_answer` BOOLEAN NOT NULL DEFAULT true,
	`correct` BOOLEAN NOT NULL DEFAULT false,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `questions_correct_answers` (
    `question_id` INT NOT NULL,
    `answer_set_answers_id` INT,
    `correct_answer` TEXT
);
CREATE TABLE IF NOT EXISTS `standings` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`standings` TEXT NOT NULL,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `added_points` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`question_id` INT NOT NULL,
	`points` INT NOT NULL,
    `date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `power_tokens` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `date_applied` TIMESTAMP,
    `type` ENUM('safe', 'double'),
    `question_id` INT,
    `points` INT DEFAULT 0,
    UNIQUE KEY `user_type` (`user_id`, `type`),
    PRIMARY KEY (`id`)
);

INSERT IGNORE INTO `answer_sets` SET `name` = "All Teams";
INSERT IGNORE INTO `answer_sets` SET `name` = "All Players";
INSERT IGNORE INTO `answer_sets` SET `name` = "All Managers";
