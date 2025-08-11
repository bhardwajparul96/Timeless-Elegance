import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-black text-sm">
      <div className="bg-black text-white py-6 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="italic text-gray-400 text-sm">Luxury Watch Concierge:</p>
          <p className="font-semibold">+91 87250 28887 &nbsp; | &nbsp; +91 87250 28882</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p className="italic text-gray-400 text-sm">Online Orders:</p>
          <p className="font-semibold">+91 98215 43088 &nbsp; | &nbsp; +91 11 4011 5246</p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <p className="italic text-gray-400 text-sm">Customer Care Number:</p>
          <p className="font-semibold">+91 87250 60021</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 md:px-20 py-8 border-t">
        {/* Column 1 - Luxury Brands */}
        <div>
          <h3 className="font-semibold mb-2">LUXURY BRANDS</h3>
          <ul className="space-y-1">
            <li>Rolex</li>
            <li>Tudor</li>
            <li>Panerai</li>
            <li>Omega</li>
            <li>Rado</li>
            <li className="text-gray-500">More...</li>
          </ul>
        </div>

        {/* Column 2 - Categories */}
        <div>
          <h3 className="font-semibold mb-2">CATEGORIES</h3>
          <ul className="space-y-1">
            <li>Watches for Men</li>
            <li>Watches for Women</li>
            <li>Watches Online</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>The Million-Tree Project</li>
            <li>Our Boutiques</li>
            <li>Help Centre</li>
            <li>Repair & Service</li>
            <li className="text-gray-500">More...</li>
          </ul>
        </div>

        {/* Column 4 - Apps */}
        <div>
          <h3 className="font-semibold mb-2">GET THE APP</h3>
          <div className="flex flex-col space-y-2">
            <img src="/assets/appstore.png" alt="App Store" className="w-32" />
            <img src="/assets/playstore.png" alt="Google Play" className="w-32" />
          </div>
        </div>

        {/* Column 5 - Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-sm mb-2">Be the first to hear about special offers & invites.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-1 border border-gray-400 rounded-l-md"
            />
            <button className="bg-black text-white px-4 py-1 rounded-r-md">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-xs border-t">
        <div className="mb-2 md:mb-0">© 2025 Timeless Elegance. All Rights Reserved.</div>
        <div className="flex space-x-4">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
