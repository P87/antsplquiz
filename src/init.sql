CREATE database IF NOT EXISTS antsplquiz;
USE antsplquiz;
CREATE TABLE IF NOT EXISTS`users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(30) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`display_name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS`leagues` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(30) NOT NULL,
	`passcode` VARCHAR(255) NOT NULL,
	`owner_id` INT,
	PRIMARY KEY (`id`)
);
CREATE TABLE `questions` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`league_id` INT NOT NULL,
	`question` TEXT NOT NULL,
	`answer_set_id` INT,
	`correct_answer_set_id` INT,
	`correct_answer` TEXT,
	PRIMARY KEY (`id`)
);