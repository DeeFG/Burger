
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`text` VARCHAR( 255 ) NOT NULL,
	`devoured` BOOLEAN,
	`date` TIMESTAMP,
	PRIMARY KEY ( `id` ) 
);


INSERT INTO "burgers" ("text","devour")
VALUES("Big Mac", false);


('Whopper', false),
('Baconator', false),
('Roman Burger', false);