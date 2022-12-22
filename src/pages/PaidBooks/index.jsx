import React from "react";
import FreeBook from "../../components/BookItem";

function PaidBooks(props) {
  return (
    <div>
        <h2 className="text-center text-3xl text-bold text-sage-green mt-12">Paid Books</h2>
      <div className="place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
        <FreeBook />
        <FreeBook />
        <FreeBook />
        <FreeBook />
        <FreeBook />
        <FreeBook />
        <FreeBook />
        <FreeBook />
      </div>
    </div>
  );
}

export default PaidBooks;