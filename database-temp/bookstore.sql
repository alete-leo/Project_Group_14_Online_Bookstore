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
