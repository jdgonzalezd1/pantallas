import { Link } from "react-router-dom";

const DoceInv = () => {
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
            </div>

        </>
    )
}

export default DoceInv;