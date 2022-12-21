import React from "react";
import { developers } from "../../data/developers";

const Footer = () => {
  return (
    <footer className="p-4 shadow flex items-center justify-between p-6 bg-taupe">
      <div>
        <span className="text-sm text-sage-green sm:text-center">
          © 2022 . All Rights Reserved.
        </span>
      </div>
      <div>
        <ul className="flex flex-wrap items-center text-sm text-sage-green">
          <p className="mr-4">Developed by</p>

          {developers.map((item, id) => (
            <li key={`developer- ${id}`}>
              <a className="mr-4 hover:underline" href={item.contact}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
