CREATE DATABASE wishes_db;
USE wishes_db;

create table wishes
(
    id int not null auto_increment,
    wish varchar(255) not null,
    primary key (id)
);

insert into wishes (wish) values ("Sell my next app for $1million");