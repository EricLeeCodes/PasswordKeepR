DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(20) NOT NULL,
  site_name VARCHAR(50) NOT NULL,
  site_url VARCHAR(50) NOT NULL,
  category_id INTEGER REFERENCES category(id),
  user_id INTEGER REFERENCES users(id)
);