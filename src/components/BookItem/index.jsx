import React from "react";

const FreeBook = () => {
  return (
    <div className="bg-taupe w-72 px-4 py-4 rounded">
      <div className="relative w-full mb-2 h-48 ">
        <img
          className="object-cover w-full h-full rounded"
          src="https://images.unsplash.com/photo-1576689560324-1b8748a830be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="BookName"
        />
      </div>
      <div className="px-4 py-4 text-sage-green">
        <h3 className="text-center text-bold mb-2">Title</h3>
        <div className="flex justify-between align-center">
          <p className="text-bold text-black">Author:</p>
          <p>John Smith</p>
        </div>
        <div className="flex justify-between align-center">
          <p className="text-bold text-black">Genre:</p>
          <p>Drama</p>
        </div>
      </div>
    </div>
  );
};

export default FreeBook;
