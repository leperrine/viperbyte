import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-2">
      <div className="flex-1 px-2">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          Alabama based marketing and technology solutions to grow your business.
        </p>
      </div>
      <div className="flex-1 px-2">
        <h2 className="text-lg font-semibold">Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://forms.gle/AH4zCDnRVsmUYh4j6">Contact Us</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lymanperrine/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/leperrine">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
