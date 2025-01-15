import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

  const {name} = useContext(AuthContext)
  console.log(name)

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addArticles">Add Articles</NavLink>
      </li>
      <li>
        <NavLink to="/allArticles">All Articles</NavLink>
      </li>
      <li>
        <NavLink to="/subscription">Subscription</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/myArticles">My Articles</NavLink>
      </li>
      <li>
        <NavLink to="/premiumArticles">Premium Articles</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NewsOrbit</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      {/* <div className="navbar-end">
        {!user && (
          <NavLink to="/login">
            <button className="btn btn-ghost">Login</button>
          </NavLink>
        )}

        {user && (
          <>
            <div className="flex justify-center items-center gap-2">
              <button onClick={logoutUser} className="btn">
                Logout
              </button>

              <div className="dropdown dark:bg-gray-900 dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-none btn-ghost btn-circle avatar"
                >
                  <div
                    data-tooltip-id="my-tooltip"
                    className="w-10 bg-none rounded-full"
                  >
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                    <Tooltip id="my-tooltip">
                      <div className="dark:text-white">{user?.displayName}</div>
                    </Tooltip>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:bg-gray-900 rounded-box w-52"
                >
                  {user && (
                    <li className="text-black dark:bg-gray-900 dark:text-white">
                      <Link to="/createAssignments">Create Assignments</Link>
                    </li>
                  )}
                  {user && (
                    <li className="text-black dark:bg-gray-900 dark:text-white">
                      <Link to="/attemptAssignments">
                        My Attempted Assignments
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </div> */}
      <div className="navbar-end">
        <h2>mahdi</h2>
      </div>
    </div>
  );
};

export default Navbar;
