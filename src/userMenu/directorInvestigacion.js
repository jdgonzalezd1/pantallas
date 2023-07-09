import { Link } from "react-router-dom";

const DirInv = () => {
    return (
        <>
            <div className="flex-container-start">
                <div>
                    <h1>Semilleros</h1>
                    <ul>
                        <li><Link to="/facGiSem" state={{reportId:"2"}}>Producción</Link></li>  
                    </ul>
                </div>
                <div>
                    <h1>Grupos de investigación</h1>
                    <ul>
                        <li><Link to="/facGi" state={{reportId:"10"}}>Producción</Link></li>
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

export default DirInv;