import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>main</h1>
            <Outlet/>
        </div>
    );
};

export default Main;