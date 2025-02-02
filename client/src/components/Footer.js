import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import { GiCampingTent } from "react-icons/gi";


function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-3">
          <div className="flex items-center mb-2 h-10 select-none">
            <GiCampingTent className='h-full w-auto' />
            <h5 className="text-xl font-bold ml-2">| CampPro</h5>
          </div>
            <p className="mb-4">Your one-stop shop for all camping gear and accessories. Equip yourself for the great outdoors with CampPro!</p>
            <h5 className="text-xl font-bold mb-4">Follow us</h5>
            <div className="flex space-x-4 mb-2">
                <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Email" className="hover:text-gray-400">
                  <FiMail />
                </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <h5 className="text-xl font-bold mb-4">QUICK LINKS</h5>
            <ul>
              <li className="mb-2"><Link to={""} href="#" className="hover:text-gray-400">Home</Link></li>
              <li className="mb-2"><Link to={"product"} href="#" className="hover:text-gray-400">Product</Link></li>
              <li className="mb-2"><Link to={"about"} href="#" className="hover:text-gray-400">About</Link></li>
              <li className="mb-2"><Link to={"contact"} href="#" className="hover:text-gray-400">Contact</Link></li>
              <li className="mb-2"><Link to={"login"} href="#" className="hover:text-gray-400">Login</Link></li>
            </ul>
          </div>




          <div className="w-full md:w-1/3 px-3">
            <h5 className="text-xl font-bold mb-4">NEWS LETTER</h5>
            <p className="mb-4">Sign up for our newsletter to get the latest updates and offers.</p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  className="w-full px-3 py-2 rounded-l bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 CampPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;