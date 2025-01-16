import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addarticles">Add Articles</NavLink>
      </li>
      <li>
        <NavLink to="/allarticles">All Articles</NavLink>
      </li>
      <li>
        <NavLink to="/subscription">Subscription</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/myarticles">My Articles</NavLink>
      </li>
      <li>
        <NavLink to="/premiumarticles">Premium Articles</NavLink>
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

      <div className="navbar-end">
        {!user && (
          <div>
            <NavLink to="/login">
              <button className="btn btn-ghost">Login</button>
            </NavLink>
            <NavLink to="/signUp">
              <button className="btn btn-ghost">Sign Up</button>
            </NavLink>
          </div>
        )}

        {user && (
          <>
            <div className="flex justify-center items-center gap-2">
              <button onClick={logOut} className="btn">
                Logout
              </button>

              <Link to="/myProfile">
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
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
