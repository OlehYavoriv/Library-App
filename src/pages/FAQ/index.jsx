import React from "react";
import { globalAnswers } from "../../data/globalAnswers";

const FAQ = () => {
  return (
    <section className="text-sage-green">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-sage-green mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The most common questions about how our library works and what can
            do for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
            {globalAnswers.map((item, idx) => (
              <details className="mb-4" key={`FAQ- ${idx}`}>
                <summary className="font-semibold  bg-taupe rounded-md py-2 px-4">
                  {item.question}
                </summary>
                <span>{item.answer}</span>
              </details>
            ))}
          </div>
          <div class="w-full lg:w-1/2 px-4 py-2">
            {globalAnswers.map((item, idx) => (
              <details className="mb-4" key={`FAQ- ${idx}`}>
                <summary className="font-semibold  bg-taupe rounded-md py-2 px-4">
                  {item.question}
                </summary>
                <span>{item.answer}</span>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
