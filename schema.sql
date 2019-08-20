
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


[
    {
        "id": 1,
        "name": "PICKLEBURGER",
        "devoured": "HUNGRyMAN",
        "createdAt": "2019-08-19T08:16:02.000Z",
        "updatedAt": "2019-08-19T08:16:02.000Z"
    },
    {
        "id": 2,
        "name": "impossible burger",
        "devoured": "not eaten",
        "createdAt": "2019-08-19T08:16:34.000Z",
        "updatedAt": "2019-08-19T08:16:34.000Z"
    },
    {
        "id": 3,
        "name": "veggie burger",
        "devoured": " eaten",
        "createdAt": "2019-08-19T08:16:46.000Z",
        "updatedAt": "2019-08-19T08:16:46.000Z"
    },
    {
        "id": 4,
        "name": "Bison burger",
        "devoured": " not eaten",
        "createdAt": "2019-08-19T08:17:02.000Z",
        "updatedAt": "2019-08-19T08:17:02.000Z"
    }
]