import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
const Layout = (props) => {
  const sideBarRef = React.useRef();
  //   // add our event listener for the click
  const toggleSidebar = () => {
    sideBarRef.current.classList.toggle("-translate-x-full");
  };

  const paths = ["/images", "/audios", "/videos", "/documents"];
  const location = useLocation();
  return (
    <div>
      <div class="relative min-h-screen md:flex">
        {/* <!-- mobile menu bar --> */}
        <div class="bg-gray-800 text-gray-100 flex justify-between items-center md:hidden">
          {/* <!-- logo --> */}
          <div className="flex items-center pl-2">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <a href="#" class="block px-2 text-white font-bold">
              Onfile
            </a>
          </div>
          {/* <!-- mobile menu button --> */}
          <button
            onClick={toggleSidebar}
            class="mobile-menu-button p-4 focus:outline-none "
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <!-- sidebar --> */}
        <div
          ref={sideBarRef}
          style={{
            zIndex: 1000,
          }}
          class="sidebar  bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
        >
          {/* <!-- logo --> */}
          <a href="#" class="text-white flex items-center space-x-2 px-4">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span class="text-2xl font-extrabold">Onfile</span>
          </a>

          {/* <!-- nav --> */}
          <nav>
            {paths.map((path, index) => {
              return (
                <Link
                  key={index}
                  to={path}
                  class={`block ${
                    location.pathname == path && "bg-gray-600"
                  } py-2.5 px-4 capitalize rounded transform hover:translate-x-2 transition-transform ease-in duration-200`}
                >
                  {path.slice(1)}
                </Link>
              );
            })}

            <a
              href=""
              class="block py-2.5 px-4 mt-3 rounded transform hover:translate-x-2 transition-transform ease-in duration-200"
            >
              Sign out
            </a>
          </nav>
        </div>

        {/* <!-- content --> */}
        <div class="flex-1 p-2">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;