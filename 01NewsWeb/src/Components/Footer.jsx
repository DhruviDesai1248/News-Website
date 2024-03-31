import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit tempor ligula, eu tempus nunc tempus ac. Fusce posuere facilisis sapien, sed dignissim magna faucibus sit amet.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400" />
              <p className="text-sm">desaidhruvi@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400" />
              <p className="text-sm">+91 88440 78158</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 Your Website. All rights reserved By Dhruvi Desai </p>
      </div>
    </footer>
  );
}

export default Footer;
