CREATE DATABASE virwo;
CREATE TABLE virwo.users (
    id int AUTO_INCREMENT PRIMARY KEY, 
    user varchar(200) NOT NULL, 
    mail varchar(200) NOT NULL, 
    password varchar(200) NOT NULL, 
    UNIQUE (user)
);