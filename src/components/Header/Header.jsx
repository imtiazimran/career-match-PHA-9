import React from "react";
import ActiveLink from "./ActiveLink/ActiveLink";
import bannerImg from "./banner.png"
import './ActiveLink/ActiveLink.css'

const NavBar = () => {
  return (
    <nav className="flex justify-center flex-col md:flex-row md:justify-between py-4 px-6 bg-gray-100 ">
      <div className="text-lg font-bold text-center md:text-left">My Website</div>
      <nav className="flex justify-center space-x-4 text-gray-600">
        <ActiveLink to="/" className="hover:text-blue-700 hover:underline">Home</ActiveLink>
        <ActiveLink to="/statistics" className="hover:text-blue-700 hover:underline">Statistics</ActiveLink>
        <ActiveLink to="/appliedJob" className="hover:text-blue-700 hover:underline">Applied Job</ActiveLink>
        <ActiveLink to="/blog" className="hover:text-blue-700 hover:underline">Blog</ActiveLink>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Start Applying
      </button>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pt-4 px-2 md:px-60 bg-gray-100">
    <div className="md:w-2/4 mx-auto">
      <h1 className="text-4xl font-bold">One Step Closer <br /> To Achieving <br /> <span className="text-indigo-500">Your Goals</span></h1>
      <p className="text-gray-700 mt-4">Another stride forward, toward the realization
       of thy heart's desires,  draws thee nigh. Thy hopes, once ephemeral as the mist that 
       creeps o'er yonder moor, now take on flesh and form, 
      </p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
    <div className="mt-6 md:mt-0">
      <img src={bannerImg} alt="Banner Image" className="rounded-md" />
    </div>
  </div>
  );
};



export  {NavBar, Header };
