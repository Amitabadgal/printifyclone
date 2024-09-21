import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleDropdown = (dropdown) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        

        <div className="flex items-center justify-between w-full md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-gray-700 text-xl" />
          </button>
          <div className="font-protest text-4xl font-bold ml-0">P</div>
          <div className="space-x-4">
            <button className="text-black font-bold px-4 py-2 rounded-md border hover:bg-gray-100 transition-colors duration-200 ease-in-out">
              Log in
            </button>
            <button className="bg-customGreen text-black font-bold px-4 py-2 rounded-md hover:bg-customGreen1 transition-colors duration-200 ease-in-out">
              Sign up
            </button>
          </div>
        </div>

        
        <div className="hidden md:flex space-x-6 items-center">
        <div className="font-protest text-4xl font-bold ml-32">Printify</div>
          <a href="#" className="text-gray-700 hover:text-customPurple underline"> Catalog</a>

         
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <a href="#" className="text-gray-700 hover:text-customPurple underline">
                How it works
              </a>
              <span className="ml-1">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="group-hover:hidden"
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="hidden group-hover:inline"
                />
              </span>
            </div>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                How Printify Works
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Print on Demand
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Printify Quality Promise
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                What to Sell?
              </a>
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-customPurple underline">
            Pricing
          </a>

          <a href="#" className="text-gray-700 hover:text-customPurple underline">
            Blog
          </a>

          
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <a href="#" className="text-gray-700 hover:text-customPurple hover:underline">
                Services
              </a>
              <span className="ml-1">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="group-hover:hidden"
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="hidden group-hover:inline"
                />
              </span>
            </div>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Printify Studio
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Printify Express Delivery
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Transfer Products
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Order in Bulk
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Experts Program
              </a>
            </div>
          </div>

        
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <a href="#" className="text-gray-700 hover:text-customPurple hover:underline">
                Use-cases
              </a>
              <span className="ml-1">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="group-hover:hidden"
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="hidden group-hover:inline"
                />
              </span>
            </div>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Merch for Fans
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Merch for eCommerce
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Merch for Enterprises
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Grow Your Store
              </a>
            </div>
          </div>

      
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <a href="#" className="text-gray-700 hover:text-customPurple hover:underline">
                Need Help?
              </a>
              <span className="ml-1">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="group-hover:hidden"
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="hidden group-hover:inline"
                />
              </span>
            </div>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Help Center
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                Contacts
              </a>
              <a href="#" className="block px-4 py-2 hover:text-customPurple hover:underline">
                My Requests
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-4 mr-32">
          <button className="text-black font-bold px-4 py-2 rounded-md border hover:bg-gray-100 transition-colors duration-200 ease-in-out">
            Log in
          </button>
          <button className="bg-customGreen text-black font-bold px-4 py-2 rounded-md hover:bg-customGreen1 transition-colors duration-200 ease-in-out">
            Sign up
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-10">
            <a href="#" className="block text-gray-700 hover:text-customPurple hover:underline px-4 py-2">Catalog</a>

        
            <div className="px-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('howItWorks')}>
                <span className="text-gray-700 hover:text-customPurple">How it works</span>
                <FontAwesomeIcon icon={openDropdown === 'howItWorks' ? faChevronUp : faChevronDown} />
              </div>
              {openDropdown === 'howItWorks' && (
                <div className="mt-2">
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">How Printify Works</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Print on Demand</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Printify Quality Promise</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">What to Sell?</a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-700 hover:text-customPurple hover:underline px-4 py-2">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-customPurple hover:underline px-4 py-2">Blog</a>

         
            <div className="px-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('services')}>
                <span className="text-gray-700 hover:text-customPurple">Services</span>
                <FontAwesomeIcon icon={openDropdown === 'services' ? faChevronUp : faChevronDown} />
              </div>
              {openDropdown === 'services' && (
                <div className="mt-2">
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Printify Studio</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Printify Express Delivery</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Transfer Products</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Order in Bulk</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Experts Program</a>
                </div>
              )}
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('services')}>
                <span className="text-gray-700 hover:text-customPurple">Use-cases</span>
                <FontAwesomeIcon icon={openDropdown === 'services' ? faChevronUp : faChevronDown} />
              </div>
              {openDropdown === 'services' && (
                <div className="mt-2">
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Merch for Fans</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Merch for eCommerce</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Merch for Enterprises</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Grow Your Store</a>
                  
                </div>
              )}
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('services')}>
                <span className="text-gray-700 hover:text-customPurple">Need Help?</span>
                <FontAwesomeIcon icon={openDropdown === 'services' ? faChevronUp : faChevronDown} />
              </div>
              {openDropdown === 'services' && (
                <div className="mt-2">
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Help Center</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">Contacts</a>
                  <a href="#" className="block text-gray-700 hover:text-customPurple px-4 py-2">My Requests</a>
                  
                  
                </div>
              )}
            </div>
           
          </div>
        )}


      </div>
    </nav>
  );
};
export default Navbar;