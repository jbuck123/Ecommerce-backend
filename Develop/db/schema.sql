-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db

CREATE TABLE category {
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(250) NOT NULL
};

CREATE TABLE Product(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    price INT NOT NULL --validate that this value is a decimal.
    stock INT NOT NULL DEFAULT 10 -- validate that the value is numeric
    category_id INT 
    FOREIGN KEY (category_id) REFERENCES Category (id)
)
CREATE TABLE Tag{
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tag_name VARCHAR(250)
}
CREATE TABLE ProductTag{
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_id INT 
    FOREIGN KEY (product_id) REFERENCES Tag (id)
}