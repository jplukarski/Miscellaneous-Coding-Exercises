CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id int not null auto_increment,
  authoer varchar(255) not null,
  chirp varchar(280) not null,
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  primary key (id)

);