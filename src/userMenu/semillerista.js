import { Link } from "react-router-dom";

const Semillerista = () => {
    return (
        <>
            <div className="flex-container-start">
                <div>
                    <h1>Semilleros</h1>
                    <ul>
                        <li><Link to="/facProg" state={{reportId:"20"}}>Semilleros en un programa</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Proyectos</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"6"}}>Proyectos activos Semilleros</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"7"}}>Proyectos finalizados Semilleros</Link></li>
                        <li><Link to="/facGiSemProy" state={{reportId:"22"}}>Información de un proyecto</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Semillerista;