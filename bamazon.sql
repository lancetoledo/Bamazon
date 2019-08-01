DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (123, "Flatscreen T.V", "electronics", 299.99, 15),
	   (200,"Smartphone", "electronics", 199.99, 10),
	   (365,"Laptop", "electronics", 219.99, 5),
	   (420,"Volleyball", "sports", 15.99, 20),
	   (560,"Record Player", "electronics", 79.99, 8),
	   (640,"Pullover Hoodie", "clothes", 59.99, 19),
	   (780,"Denim Jeans", "clothes", 49.99, 14),
	   (800,"Knee pads", "sports", 12.50, 20),
	   (960,"Basketball", "sports", 10.99, 19),
	   (1000,"shoes", "clothes", 119.99, 5)