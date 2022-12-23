import axios from "axios";
import React, { useEffect, useState } from "react";
import { paidBookAPI } from "../../api/BooksAPI";
import PaidBooksItem from "../../components/BookItemPaid";

const PaidBooks = () => {
  const [paidBook, setPaidBooks] = useState([]);

  useEffect(() => {
    axios.get(paidBookAPI).then((response) => setPaidBooks(response.data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl text-bold text-sage-green mt-12">
        Paid Books
      </h2>
      <div className="place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
        {paidBook.map((books) => (
          <PaidBooksItem key={books.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default PaidBooks;
