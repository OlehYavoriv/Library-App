import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../Navigation/NavMenu";
import UserAccountInfo from "../Navigation/UserAccountInfo";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="w-full bg-taupe shadow">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/home" className="text-2xl font-bold text-sage-green">
                Library
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-sage-green rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      className="w-5"
                      role="img"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      className="w-5"
                      role="img"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <NavMenu />

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <UserAccountInfo />
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <UserAccountInfo name="UserId" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
