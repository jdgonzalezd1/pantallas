import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div class="flex-container-start">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/screen1">Reporte 1</Link>
                    </div>
                    <div>
                        <Link to="/screen2">Reporte 2</Link>
                    </div>
                    <div>
                        <Link to="/screen3">Reporte 3</Link>
                    </div>
                    <div>
                        <Link to="/screen4">Reporte 4</Link>
                    </div>
                    <div>
                        <Link to="/screen5">Reporte 5</Link>
                    </div>
                    <div>
                        <Link to="/firma">Firma</Link>
                    </div>
            </div>


            <Outlet />
        </>
    )
};

export default Layout;