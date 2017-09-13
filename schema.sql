CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(32),
department_name VARCHAR(32),
price DECIMAL(3,2),
stock_quantity INTEGER,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ("Toaster", "Appliance", 25.00, 10),
	   ("Oven", "Appliance", 150.00, 5),
       ("Yeezys", "Shoes", 225.00, 10),
       ("Air Jordans", "Shoes", 200.00, 12),
       ("Supreme", "Apparel", 150.00, 7),
       ("Fear of God", "Apparel", 125.00, 9),
       ("Rick and Morty", "Poster", 7.00, 25),
       ("Pulp Fiction", "Poster", 7.00, 25),
       ("Tooth Brush", "Grooming", 3.00, 50),
       ("Razor", "Grooming", 6.00, 50);
       
SELECT * FROM products;
