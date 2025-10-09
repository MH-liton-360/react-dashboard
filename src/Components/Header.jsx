import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return <div>
        <h1>Dashboard!</h1>
        <div className="w-64 min-h-full bg-orange-400">

            <ul className="menu">
                <li><NavLink to="/dashboard/card">My dashboard!</NavLink> </li>
            </ul>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
};

export default Header;