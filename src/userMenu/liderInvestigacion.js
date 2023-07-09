import { Link } from "react-router-dom";

const LiderInv = () => {
    return (
        <>
            <div className="flex-container-start">
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
                    </ul>
                </div>
                <div>
                    <h1>Proyectos</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"6"}}>Proyectos activos Semilleros</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"7"}}>Proyectos finalizados Semilleros</Link></li>
                        <li><Link to="/facGi" state={{reportId:"16"}}>Proyectos activos Grupos de investigación</Link></li>
                        <li><Link to="/facGi" state={{reportId:"17"}}>Proyectos finalizados Grupos de investigación</Link></li>
                        <li><Link to="/facGiSemProy" state={{reportId:"22"}}>Información de un proyecto</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Presupuesto</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"9"}}>Uso Semilleros</Link></li>
                        <li><Link to="/facGiSem" state={{reportId:"19"}}>Uso Grupos de investigación</Link></li>
                        <li><Link to="/facGiSemTime" state={{reportId:"25"}}>Uso Semilleros en periodo</Link></li>
                        <li><Link to="/facGiTime" state={{reportId:"26"}}>Uso Grupo de investigación en periodo</Link></li>                    
                    </ul>
                </div>


            </div>

        </>
    )
}

export default LiderInv;