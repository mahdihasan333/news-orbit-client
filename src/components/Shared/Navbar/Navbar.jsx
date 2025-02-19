import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle logout and redirect
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-lime-500 text-black"
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link className="text-xl font-bold" to="/">
            NewsOrbit
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6 items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allArticles">All Articles</NavLink>
            </li>
            <li>
              <NavLink to="/subscription">Subscription</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/addArticles">Add Articles</NavLink>
                </li>
                {isAdmin && (
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/myArticles">My Articles</NavLink>
                </li>
                <li>
                  <NavLink to="/premiumArticles">Premium Articles</NavLink>
                </li>

                <li onClick={() => handleLogout()}>
                  <button className="btn btn-ghost">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* User Info and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              {/* <NavLink to="/login">
                <button className="btn btn-outline">Login</button>
              </NavLink> */}
              <NavLink to="/signUp">
                <button className="btn btn-primary">Sign Up</button>
              </NavLink>
            </>
          ) : (
            <div className="relative flex items-center dropdown-container">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="btn btn-ghost flex items-center"
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-500" size={28} />
                ) : (
                  <FaMoon className="text-blue-500" size={28} />
                )}
              </button>

              {/* User Image and Dropdown Toggle */}
              <Link to="/myProfile">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border border-white"
                  />
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-lime-500 dark:bg-gray-900 text-white py-4 px-6">
          <ul className="space-y-3 flex flex-col items-center justify-center">
            <li>
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allArticles"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscription"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Subscription
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/addArticles"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Add Articles
                  </NavLink>
                </li>
                {isAdmin && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to="/myArticles"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/premiumArticles"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Premium Articles
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false); // Logout এর পরও মেনু বন্ধ হবে
                    }}
                    className="w-full text-left px-4 py-2 bg-red-600 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          <div className="flex flex-col items-center space-y-4 mt-4">
            {!user && (
              <>
                <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn btn-outline w-full">Login</button>
                </NavLink>
                <NavLink
                  to="/signUp"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="btn btn-primary w-full">Sign Up</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
