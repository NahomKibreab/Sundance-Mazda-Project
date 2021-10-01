DROP TABLE IF EXISTS garage CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY NOT NULL,
  year INTEGER NOT NULL,
  mileage INTEGER ,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  stock_number VARCHAR(255) NOT NULL,
  trim VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  avaliable BOOLEAN NOT NULL DEFAULT TRUE, 
  ext_color VARCHAR(255) ,
  int_color VARCHAR(255) ,
  specs TEXT [],
  features TEXT [],
  image_links TEXT []
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
  total_price INTEGER NOT NULL,
  order_date TIMESTAMP DEFAULT now()
);


CREATE TABLE garage (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  vehicles INTEGER[]
);