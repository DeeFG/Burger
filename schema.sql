
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burgerName VARCHAR( 255 ) NOT NULL,
	devour BOOLEAN,
	PRIMARY KEY ( id ) 
);



INSERT INTO burgers (burgerName, devour) 
VALUES ('Cheese Burger', FALSE);


