import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFound";

const BookDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(
      `https://desolate-cove-47308.herokuapp.com/api/books/${id}`
    );
    setItem(res.data);
  };
  fetch();
  return (
    <>
      {!item ? (
        <NotFoundPage />
      ) : (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
            <img
              className="w-full h-full"
              alt={item.title}
              src={
                `https://desolate-cove-47308.herokuapp.com/api/books/` +
                item.id +
                "/image"
              }
            />
          </div>

          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-center lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-sage-green mt-12">
                {item.title}
              </h2>
            </div>

            <div>
              <p className="xl:pr-48 text-justify lg:leading-tight leading-normal text-gray-600 mt-7">
                {item.description}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">
                <span className="font-extrabold">Available Count: </span>
                {item.availableCount}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-extrabold">Count: </span>
                {item.count}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-extrabold">Genre: </span>
                {item.genre}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-extrabold">Author: </span>
                {item.author}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                <span className="font-extrabold">Price: </span>
                {item.price} $
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
