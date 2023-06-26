import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { loadGrupo, loadSemillero, loadProyecto } from './loadData';

/*
Funciones de despliegue de pdf
*/
function displayPdf() {
    let pdf = document.getElementById("pdf");
    pdf.removeAttribute("hidden");
}

/*
Funcion de despliegue de pantalla
*/

function Screen1() {
    /*
    Funciones de carga de datos desde la API
    */
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

    const [facultad, setFacultad] = useState([]);
    const [grupo, setGrupo] = useState([]);
    const [semillero, setSemillero] = useState([]);
    const [proyecto, setProyecto] = useState([]);

    const [statusF, setStatusF] = useState([]);
    const [statusG, setStatusG] = useState([]);
    const [statusS, setStatusS] = useState([]);

    const fetchFacultadData = async () => {
        try {
            const result = await fetch("http://localhost:8081/filtro/facultad");
            const parsedResponse = await result.json();
            setFacultad(parsedResponse);
        } catch (error) {
            console.log("Error", error);
        }

    }

    const fetchGrupoData = async () => {
        try {
            const result = await fetch("http://localhost:8081/filtro/facultad/gi", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    facultad: 1001
                })
            });
            const parsedResponse = await result.json();
            setGrupo(parsedResponse);
        } catch (error) {
            console.log("Error", error);
        }
    }

    const fetchSemilleroData = async () => {
        try {
            const result = await fetch("http://localhost:8081/filtro/facultad/gi/semillero", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    gi: 3003
                })
            });
            const parsedResponse = await result.json();
            setSemillero(parsedResponse);
        } catch (error) {
            console.log("ªªªªªªErrorªªªªªª", error);
        }
    }

    const fetchProyectoData = async () => {
        try {
            const result = await fetch("http://localhost:8081/filtro/facultad/gi/semillero/proyecto", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    semillero: 4018
                })
            });
            const parsedResponse = await result.json();
            setProyecto(parsedResponse);
        } catch (error) {
            console.log("ªªªªªªErrorªªªªªª", error);
        }
    }


    useEffect(() => {
        fetchFacultadData();
        fetchGrupoData();
        fetchSemilleroData();
        fetchProyectoData();
    }, []);

    /*
    Funcion de renderizado
    */
    return <>
        <div className="flex-container">
            <div hidden>
                <input id='reportId' type='text'></input>
                <input id='userId' type='text'></input>
            </div>
            <div>
                <select classNameName="form-control" id="facultad" value={statusF} onChange={(e) => setStatusF(e.target.value)} onMouseOver={loadGrupo(grupo, statusF)}>
                    <option value="0">--Facultad--</option>
                    {facultad.length > 0 && (
                        <>
                            {facultad.map(facu => (
                                <option value={facu.id}>{facu.nombre}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
            <div>
                <select className="form-control" id="grupoInvestigacion" value={statusG} onChange={(e) => setStatusG(e.target.value)} onMouseOver={loadSemillero(semillero, statusG)}>
                    <option value="0">--Grupo--</option>
                </select>
            </div>

            <div>
                <select className="form-control" id="semillero" value={statusS} onChange={(e) => setStatusS(e.target.value)} onMouseOver={loadProyecto(proyecto, statusS)}>
                    <option value="0">--Semillero--</option>
                </select>
            </div>
            <div>
                <select id="proyecto" defaultValue="0">
                    <option value="0">--Proyecto--</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={displayPdf}>Generar reporte</button>
            </div>

        </div>
        <div id="pdf" hidden>
            <div className="pdf-section">
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <Viewer fileUrl="/Resources/boleta.pdf" plugins={[getFilePluginInstance]} />
                </Worker>
            </div>
        </div>
        <div className="flex-container-center">
            <button type="button" className="download-button"><Download /></button>
        </div>

    </>

}

export default Screen1;
