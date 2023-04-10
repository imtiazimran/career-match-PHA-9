import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake , faCarAlt, faFaceAngry } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-400 pt-10 pb-8">
        <div className="container w-3/4 mx-auto flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 px-4">
            <h2 className="text-lg font-semibold mb-2 text-white">Website Name</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex gap-3">
            <FontAwesomeIcon icon={faFaceAngry} />
            <FontAwesomeIcon icon={faCarAlt} />
            <FontAwesomeIcon icon={faCake} />
            </div>
          </div>
          <div className="w-full lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold mb-2 text-white">About Company</h3>
            <ul className="list-unstyled">
              <li className='my-3'><a href="#" className="hover:text-gray-500">Mission</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">Vision</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">Values</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold mb-2 text-white">About Product</h3>
            <ul className="list-unstyled">
              <li className='my-3'><a href="#" className="hover:text-gray-500">Features</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">Pricing</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Support</h3>
            <ul className="list-unstyled">
              <li className='my-3'><a href="#" className="hover:text-gray-500">Contact Us</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">Help Center</a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
            <ul className="list-unstyled">
              <li className='my-3'><a href="#" className="hover:text-gray-500">524 Broadway , NYC </a></li>
              <li className='my-3'><a href="#" className="hover:text-gray-500"> +1 777 - 978 - 5570</a></li>
            </ul>
          </div>
        </div>
        <hr className='w-3/4 mt-3 mx-auto' style={{ backgroundImage: 'linear-gradient(90deg, #7E90FE 20%, #9873FF 20%)' }} />
        <div className="container mx-auto mt-8 text-center">
          <p>&copy; 2023 Website Name. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Footer;