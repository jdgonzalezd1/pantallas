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
                        <Link to="/admin">Administrador</Link>
                    </div>
                    <div>
                        <Link to="/coordinadorInvestigacion">Coordinador Investigacion</Link>
                    </div>
                    <div>
                        <Link to="/decano">Decano</Link>
                    </div>
                    <div>
                        <Link to="/directorGrupoInvestigacion">Director GI</Link>
                    </div>
                    <div>
                        <Link to="/directorInvestigacion">Director Investigacion</Link>
                    </div>
                    <div>
                        <Link to="/directorPrograma">Director de programa</Link>
                    </div>
                    <div>
                        <Link to="/docenteInvestigador">Docente Investigador</Link>
                    </div>
                    <div>
                        <Link to="/liderInvestigacion">Lider investigacion</Link>
                    </div>
                    <div>
                        <Link to="/liderSemillero">Lider Semillero</Link>
                    </div>
                    <div>
                        <Link to="/semillerista">Semillerista</Link>
                    </div>
            </div>  
            <Outlet />
        </>
    )
};

export default Layout;