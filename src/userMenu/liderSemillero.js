import { Link } from "react-router-dom";

const LiderSem = () => {
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
                    <h1>Proyectos</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"6"}}>Proyectos activos Semilleros</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"7"}}>Proyectos finalizados Semilleros</Link></li>
                        <li><Link to="/facGiSemProy" state={{reportId:"22"}}>Información de un proyecto</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Presupuesto</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"9"}}>Uso Semilleros</Link></li>  
                        <li><Link to="/facGiSemTime" state={{reportId:"25"}}>Uso Semilleros en periodo</Link></li>                
                    </ul>
                </div>


            </div>

        </>
    )
}

export default LiderSem;