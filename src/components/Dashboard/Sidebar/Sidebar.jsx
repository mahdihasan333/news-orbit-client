import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <h3>sidebar</h3>
            <div>
                <ul>
                    <li>
                        <NavLink to="/dashboard">Admin Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers">All Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/AdminArticles">All Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addPublisher">Add Publisher</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;