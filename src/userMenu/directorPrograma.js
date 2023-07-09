import { Link } from "react-router-dom";

const DirProg = () => {
    return (
        <>
            <div className="flex-container-start">
                <div>
                    <h1>Semilleros</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"0"}}>Datos basicos</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"1"}}>Integrantes activos</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"2"}}>Producción</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"3"}}>Participación en eventos</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"4"}}>Participación en convocatorias</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"5"}}>Proyectos en convocatorias abiertas</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"8"}}>Investigadores en formación</Link></li>
                        <li><Link to="/facProg" state={{reportId:"20"}}>Semilleros en un programa</Link></li>
                        <li><Link to="/facGiSemTime" state={{reportId:"23"}}>Actividad en un periodo</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Grupos de investigación</h1>
                    <ul>
                        <li><Link to="/facGi" state={{reportId:"10"}}>Producción</Link></li>
                        <li><Link to="/facGi" state={{reportId:"11"}}>Integrantes activos</Link></li>
                        <li><Link to="/facGi" state={{reportId:"12"}}>Datos basicos</Link></li>
                        <li><Link to="/facGi" state={{reportId:"13"}}>Participación en eventos</Link></li>
                        <li><Link to="/facGi" state={{reportId:"14"}}>Participación en convocatorias</Link></li>
                        <li><Link to="/facGi" state={{reportId:"15"}}>Proyectos en convocatorias abiertas</Link></li>
                        <li><Link to="/facGi" state={{reportId:"18"}}>Investigadores en formación</Link></li>
                        <li><Link to="/fac" state={{reportId:"21"}}>Grupos de investigación en un programa</Link></li>
                        <li><Link to="/facGiTime" state={{reportId:"24"}}>Actividad en un periodo</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Proyectos</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"6"}}>Proyectos activos Semilleros</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"7"}}>Proyectos finalizados Semilleros</Link></li>
                        <li><Link to="/facGi" state={{reportId:"16"}}>Proyectos activos Grupos de investigación</Link></li>
                        <li><Link to="/facGi" state={{reportId:"17"}}>Proyectos finalizados Grupos de investigación</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default DirProg;