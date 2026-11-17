
import React, { useState, useEffect } from "react";

function BookList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h1>My Books</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h2>Title: {book.title}</h2>
          <p>Author ID: {book.author_id}</p>
          <p>Book ID: {book.id}</p>
        </div>
      ))}

    </div>
  );
}

export default BookList;
