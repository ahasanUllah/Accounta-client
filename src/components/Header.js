import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const Header = () => {
   return (
      <header className="p-4 bg-gray-100 text-gray-800">
         <div className="container flex justify-between h-16 mx-auto ">
            <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2 ">
               <FaFileInvoiceDollar className="text-4xl text-teal-600"></FaFileInvoiceDollar>
               <p className="text-3xl font-semibold ml-2">accounta</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
               <li className="flex">
                  <Link
                     rel="noopener noreferrer"
                     to="/"
                     className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-teal-600 border-teal-600"
                  >
                     Home
                  </Link>
               </li>
               <li className="flex">
                  <Link
                     rel="noopener noreferrer"
                     to="/"
                     className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                     Sevices
                  </Link>
               </li>
               <li className="flex">
                  <Link
                     rel="noopener noreferrer"
                     to="/"
                     className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                     Review
                  </Link>
               </li>
               <li className="flex">
                  <Link
                     rel="noopener noreferrer"
                     to="/"
                     className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                     About
                  </Link>
               </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
               <Link to="/signin">
                  <button className="self-center px-8 py-3 rounded">Sign in</button>
               </Link>
               <Link to="/signup">
                  <button className="self-center px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50">
                     Sign up
                  </button>
               </Link>
            </div>
            <button className="p-4 lg:hidden">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
            </button>
         </div>
      </header>
   );
};

export default Header;
