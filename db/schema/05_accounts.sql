DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  password VARCHAR(20) NOT NULL,
  site_id INTEGER REFERENCES sites(id),
  category_id INTEGER REFERENCES category(id),
  user_id INTEGER REFERENCES users(id)
);