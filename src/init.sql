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
	`answer` TEXT,
	`answer_id` INT,
	`user_id` INT NOT NULL,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `standings` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`standings` TEXT NOT NULL,
	`date_added` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

INSERT IGNORE INTO `answer_sets` SET `name` = "All Teams";
INSERT IGNORE INTO `answer_sets` SET `name` = "All Players";
