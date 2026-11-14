CREATE DATABASE "BookstoreDB" (
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
);

 -- BookstoreDB/Schemas/public/Tables
-- to change postgres password btw, it's psql -U postgres (on windows) then ALTER USER username WITH PASSWORD 'password';

CREATE TABLE books (
  id INT,
  author_id INT,
  title STRING,
  PRIMARY KEY (id)
);

 -- values

CREATE TABLE users (
  id INT,
  username STRING,
  PRIMARY KEY (id)
);



CREATE TABLE reviews (
  id INT,
  user_id INT,
  review_text STRING,
  PRIMARY KEY (id)
);
