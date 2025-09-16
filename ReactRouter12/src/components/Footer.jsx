import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Acme Inc</h2>
          <p className="text-gray-400">
            Building quality solutions for businesses worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <svg
              className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12C22 6.477 17.523 2 12 2S2 
                6.477 2 12c0 4.991 3.657 9.128 8.438 
                9.878v-6.987H8.077v-2.89h2.361V9.845c0-2.337 
                1.393-3.628 3.522-3.628 1.021 0 
                2.09.182 2.09.182v2.292h-1.178c-1.162 
                0-1.523.721-1.523 1.46v1.753h2.59l-.414 
                2.89h-2.176V21.88C18.343 21.128 22 
                16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>

            {/* Twitter */}
            <svg
              className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M23 3a10.9 10.9 0 
                01-3.14 1.53A4.48 4.48 0 
                0022.4.36a9.12 9.12 0 
                01-2.88 1.1A4.52 4.52 0 
                0016.11 0c-2.5 0-4.52 
                2.02-4.52 4.51 0 .35.04.7.11 
                1.03A12.85 12.85 0 013 1.14a4.5 
                4.5 0 001.4 6.03A4.52 4.52 0 
                012 6.4v.06c0 2.18 1.55 4 
                3.6 4.42a4.49 4.49 0 
                01-2.05.08c.58 1.8 2.26 
                3.11 4.26 3.15A9.05 9.05 0 
                012 19.54 12.8 12.8 0 
                008.29 21c7.55 0 11.68-6.14 
                11.68-11.46 0-.17-.01-.35-.02-.52A8.18 
                8.18 0 0023 3z"
                clipRule="evenodd"
              />
            </svg>

            {/* Instagram */}
            <svg
              className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M7.75 2h8.5A5.75 5.75 0 
                0122 7.75v8.5A5.75 5.75 0 
                0116.25 22h-8.5A5.75 5.75 0 
                012 16.25v-8.5A5.75 5.75 0 
                017.75 2zM12 7.25a4.75 4.75 
                0 100 9.5 4.75 4.75 0 
                000-9.5zm6.25-.5a1.25 1.25 0 
                11-2.5 0 1.25 1.25 0 
                012.5 0zM8.5 12a3.5 3.5 
                0 117 0 3.5 3.5 0 
                01-7 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Acme Inc. All rights reserved.
      </div>
    </footer>
  );
}
