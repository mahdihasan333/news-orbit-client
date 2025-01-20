import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/dashboard">Admin Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">All Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/adminArticles">All Articles</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addPublisher">Add Publisher</NavLink>
          </li>
        </ul>
      </div>

      <div className="divider"></div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
