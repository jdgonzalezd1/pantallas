import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex-container-start">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/facGiSemProy">Reporte 1</Link>
                    </div>
                    <div>
                        <Link to="/facGi">Reporte 2</Link>
                    </div>
                    <div>
                        <Link to="/facGiSem">Reporte 3</Link>
                    </div>
                    <div>
                        <Link to="/facProg">Reporte 4</Link>
                    </div>
                    <div>
                        <Link to="/fac">Reporte 5</Link>
                    </div>
                    <div>
                        <Link to="/facGiSemTime">Reporte 6</Link>
                    </div>
                    <div>
                        <Link to="/facGiTime">Reporte 7</Link>
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