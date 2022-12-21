const SignInUser = () => {
  return (
    <div className="bg-taupe min-w-screen min-h-screen">
      <div className="grid place-items-center h-screen">
        <div className="px-8 py-8 w-[30rem] h-72 bg-white rounded-xl shadow-lg">
          <h3 className="text-center text-2xl text-sage-green text-bold">
            Login
          </h3>

          <form className="mt-12">
            <div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="identification-number"
                type="text"
                placeholder="Id"
                required
              />
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                type="button"
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
};

export default SignInUser;
