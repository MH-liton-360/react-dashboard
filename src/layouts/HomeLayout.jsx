import { Outlet } from "react-router-dom";
import Header from "../Components/header";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav></nav>
            <Outlet></Outlet>

        </div>
    );
};

export default HomeLayout;