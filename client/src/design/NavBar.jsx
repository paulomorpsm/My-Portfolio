import React, { useState } from "react";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // Adjust the offset value as needed
      const yCoordinate =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  };
  return (
    <nav className="bg-blue-gray-900 z-40 top-0 dark:bg-black sticky">
      <div className="max-w-screen-x2 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Portfolio
          </span>
        </div>
        <button
          onClick={handleMenuToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="w-5 h-5 block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-300`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <button
                onClick={() => handleScrollTo("homeContainer")}
                className="block py-2 px-3 font-bold whitespace-nowrap text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("aboutContainer")}
                className="block py-2 px-3 font-bold whitespace-nowrap text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("socialmediaContainer")}
                className="block py-2 px-3 font-bold whitespace-nowrap text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Accounts
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
