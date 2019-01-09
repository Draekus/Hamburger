-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Use the burgers_db database --
USE burgers_db;
-- Create a table called burgers --
CREATE TABLE burgers (
    `id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `burger_name` VARCHAR(50) NOT NULL,
    `devoured` BOOLEAN DEFAULT 0
);
