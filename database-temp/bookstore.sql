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
  title VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO books VALUES (1, 1, 'The Test Book');



CREATE TABLE authors (
  id INT,
  username VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO authors VALUES (1, 'Tester Mann');


CREATE TABLE reviews (
  id INT,
  book_id INT,
  review_value INT,
  username VARCHAR(255),
  review_text VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO reviews VALUES (1, 1, 10, 'First Reviewer', 'This is a great book!');

