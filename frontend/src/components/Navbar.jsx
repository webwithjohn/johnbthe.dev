import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    const menu = document.getElementById("menu");

    if (!menu.contains(event.target) && event.target.id !== "menu-button") {
      setIsOpen(false);
    }
  };

  window.addEventListener("click", handleOutsideClick);

  return (
    <nav className="backdrop-blur bg-white/60 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div class="flex items-center">
              <div class="bg-deep-indigo text-white font-bold text-lg p-2 rounded">
                JB
              </div>
              <h1 class="ml-2 text-gray-800 font-bold text-lg">johnbthe.dev</h1>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <a
              href="#home"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-white hover:text-white hover:bg-deep-indigo"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-white hover:bg-deep-indigo"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-white hover:bg-deep-indigo"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-white hover:bg-deep-indigo"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-white hover:bg-deep-indigo"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="block lg:hidden flex-shrink-0 ml-auto py-2 border border-transparent text-gray-600 focus:none"
            id="menu-button"
            onClick={handleMenuButtonClick}
          >
            <svg
              className="h-6 w-6 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only pointer-events-none">Open main menu</span>
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={isOpen ? "w-full" : "hidden"} id="menu">
        <nav
          className="text-sm font-medium text-gray-700 space-y-1"
          aria-label="Main"
        >
          <a
            href="#home"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-deep-indigo"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-deep-indigo"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-deep-indigo"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-deep-indigo"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-deep-indigo"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </nav>
  );
}
