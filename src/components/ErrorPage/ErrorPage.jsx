import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-medium mt-4 mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full uppercase text-lg font-semibold"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
