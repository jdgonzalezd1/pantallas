import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex-container-start">
                    <div>
                        <Link to="/">Home</Link>
                    </div>                 
                    <div>
                        <Link to="/firma">Firma</Link>
                    </div>
                    <div>
                        <Link to="/user1">Usuario 1</Link>
                    </div>
            </div>  
            <Outlet />
        </>
    )
};

export default Layout;