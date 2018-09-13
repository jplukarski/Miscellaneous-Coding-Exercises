CREATE DATABASE movielist_db;
USE movielist_db;


CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);


INSERT INTO movies (movie) VALUES ('Shrek 4: The Shekening');