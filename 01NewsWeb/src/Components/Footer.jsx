import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
            The customer is very important, the customer will be followed by the customer. He flatters now and then, now and then. It is an easy matter to put down, but the dignissim must have a great taste.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            {" "}
          
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://github.com/DhruviDesai1248" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-gray-400"
              />
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
        <p className="text-sm">
          &copy; 2024 Your Website. All rights reserved By Dhruvi Desai
        </p>
      </div>
    </footer>
  );
}

export default Footer;
