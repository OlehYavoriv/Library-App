import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-taupe min-w-screen min-h-screen">
      <div className="text-center pt-20">
        <h3 className="font-bold text-sage-green text-9xl mb-12">404</h3>
        <p className="text-2xl font-bold text-center text-sage-green md:text-3xl mb-8">
          <span className="text-red-500">Oh,</span> you seem to be lost ...
        </p>
        <p className="text-sm font-semibold text-sage-green underline">
          <Link to="/">Go Back</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
