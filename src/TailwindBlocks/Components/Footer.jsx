import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center text-center -mb-10 -mx-4">
          <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">New Arrivals</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Best Sellers</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">On Sale</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Clearance</a></li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Shipping Info</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Return Policy</a></li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Twitter</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Pinterest</a></li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWSLETTER</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Sign up for updates</a></li>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 mx-auto flex flex-wrap justify-center items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email Address</label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
              Subscribe
            </button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              Stay updated with the latest news and offers!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 IceCream Shop —
            <a href="https://twitter.com/icecreamshop" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@icecreamshop</a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Sweetest treats in town — Follow us for more updates. 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
