DROP TABLE IF EXISTS category CASCADE;

CREATE TABLE category (
  id SERIAL PRIMARY KEY NOT NULL,
  category_name VARCHAR(50)
);