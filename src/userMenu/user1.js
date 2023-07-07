import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <>
            <div className="flex-container-start">
                <div>
                    <h1>Semilleros</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"0"}}>Datos basicos</Link></li>
                        <li><Link to="/facGiSem">Integrantes activos</Link></li>
                        <li><Link to="/facGiSem">Producción</Link></li>
                        <li><Link to="/facGiSem">Participación en eventos</Link></li>
                        <li><Link to="/facGiSem">Participación en convocatorias</Link></li>
                        <li><Link to="/facGiSem">Proyectos en convocatorias abiertas</Link></li>
                        <li><Link to="/facGiSem">Investigadores en formación</Link></li>
                        <li><Link to="/facProg">Semilleros en un programa</Link></li>
                        <li><Link to="/facGiSemTime">Actividad en un periodo</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Grupos de investigación</h1>
                    <ul>
                        <li><Link to="/facGi">Producción</Link></li>
                        <li><Link to="/facGi">Integrantes activos</Link></li>
                        <li><Link to="/facGi">Datos basicos</Link></li>
                        <li><Link to="/facGi">Participación en eventos</Link></li>
                        <li><Link to="/facGi">Participación en convocatorias</Link></li>
                        <li><Link to="/facGi">Proyectos en convocatorias abiertas</Link></li>
                        <li><Link to="/facGi">Investigadores en formación</Link></li>
                        <li><Link to="/fac">Grupos de investigación en un programa</Link></li>
                        <li><Link to="/facGiTime">Actividad en un periodo</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Proyectos</h1>
                    <ul>
                        <li><Link to="/facGiSem">Proyectos activos Semilleros</Link></li>
                        <li><Link to="/facGiSem">Proyectos finalizados Semilleros</Link></li>
                        <li><Link to="/facGi">Proyectos activos Grupos de investigación</Link></li>
                        <li><Link to="/facGi">Proyectos finalizados Grupos de investigación</Link></li>
                        <li><Link to="/facGiSemProy" state={{reportId:"22"}}>Información de un proyecto</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Presupuesto</h1>
                    <ul>
                        <li><Link to="/facGiSem">Uso Semilleros</Link></li>
                        <li><Link to="/facGiSem">Uso Grupos de investigación</Link></li>
                        <li><Link to="/facGi">Uso Semilleros en periodo</Link></li>
                        <li><Link to="/facGi">Uso Grupo de investigación en periodo</Link></li>                    
                    </ul>
                </div>


            </div>

        </>
    )
}

export default Admin;