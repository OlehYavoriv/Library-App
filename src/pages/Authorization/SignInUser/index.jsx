import { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignInUser({ setToken }) {
  const [identification, setIdentification] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      identification,
    });
    setToken(token);
  };

  return (
    <div className="bg-taupe min-w-screen min-h-screen">
      <div className="grid place-items-center h-screen">
        <div className="px-8 py-8 w-[30rem] h-72 bg-white rounded-xl shadow-lg">
          <h3 className="text-center text-2xl text-sage-green text-bold">
            Login
          </h3>

          <form onSubmit={handleSubmit} className="mt-12">
            <div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="identification-number"
                type="text"
                placeholder="Id"
                required
                onChange={(e) => setIdentification(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-sage text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cognac hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sage-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
SignInUser.propTypes = {
  setToken: PropTypes.func.isRequired,
};
