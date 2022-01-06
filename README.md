# uusAPI
Programmeerimine 2, enda projekt, kasutajad ning väljakutsete pärimine


// MYSQL andmebaasi loomine //

CREATE SCHEMA IF NOT EXISTS `uusapi` DEFAULT CHARACTER SET utf8mb4 ;
USE `uusapi` ;

-- -----------------------------------------------------
-- Table `uusapi`.`challengesbody`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uusapi`.`challengesbody` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `challenge` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 39
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `uusapi`.`challengesmind`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uusapi`.`challengesmind` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `challenge` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `uusapi`.`challengesstomach`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uusapi`.`challengesstomach` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `challenge` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `uusapi`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uusapi`.`user` (
  `firstName` VARCHAR(255) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `uusapi`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `uusapi`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NULL DEFAULT NULL,
  `lastName` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  UNIQUE INDEX `id` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




// Päringud //

Päringud MYSQL

INSERT INTO users(id)
VALUE("1") ;

INSERT INTO users(firstName, lastName, email, password, role) 
VALUES("Valter", "Rosenfeld", "valter@rosenfeld.ee", "$2b$10$Um6D5jbR9.u842c6hU.t1egTTTFs4uu.c8BO4ewCpE3LYqe28nMmK", "Admin"),
("Toomas", "Joomas", "toomas@joomas.ee", "$2b$10$UsUKvNVZiMQao0qwsHKsYu0ZwB0m09.vLzjpUhawf32tY1WpygPHi", "User");

INSERT INTO challengesBody(id, challenge)
VALUES ( "1", "Tee midagi kehale" );

INSERT INTO challengesMind(id, challenge)
VALUES ( "1", "Tee midagi vaimule" );

INSERT INTO challengesStomach(id, challenge)
VALUES ( "1", "Midagi kõhule" );

UPDATE `uusapi`.`users`
SET
`id` = "1"
WHERE role = "Admin";

UPDATE `uusapi`.`users`
SET
`id` = AUTO_INCREMENT
WHERE role = "User";

SELECT * FROM users;

SELECT * FROM challengesBody;
SELECT * FROM challengesMind;
SELECT * FROM challengesStomach;

UPDATE `uusapi`.`users`
SET
`id` = 1

WHERE id = "NULL" ;

INSERT INTO challengesBody SET challenge = 'kehale katse 3';

DELETE FROM challengesBody WHERE challenge = 'kehale katse 3';