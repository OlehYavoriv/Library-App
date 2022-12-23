import axios from "axios";
import React, { useEffect, useState } from "react";
import { freeBookAPI } from "../../api/BooksAPI";
import FreeBook from "../../components/BookItem";

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get(freeBookAPI).then((response) => setBook(response.data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl text-bold text-sage-green mt-12">
        Free Books
      </h2>
      <div className="place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
        {book.map((books) => (
          <FreeBook key={books.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default Books;
