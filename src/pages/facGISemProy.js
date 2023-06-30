import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { loadGrupo, loadSemillero, loadProyecto, setRequest } from './loadData';

/*
Funcion de despliegue de pantalla
*/

function FacGISemProy() {
    /*
    Funciones de carga de datos desde la API
    */
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [pdf, setPdf] = useState([]);
    const [pdfUrl, setPdfUrl] = useState("");
    const [userId, setUserId] = useState("1000689373");
    const [reportId, setReportId] = useState("22");
    const [objt, setObjt] = useState({});

    const [facultad, setFacultad] = useState([]);
    const [grupo, setGrupo] = useState([]);
    const [semillero, setSemillero] = useState([]);
    const [proyecto, setProyecto] = useState([]);

    const [statusF, setStatusF] = useState([]);
    const [statusG, setStatusG] = useState([]);
    const [statusS, setStatusS] = useState([]);
    const [statusPj, setStatusPj] = useState([]);


    const fetchPdfData = async () => {
        try {
            setObjt({
                dato: statusPj,
                reporte: reportId,
                usuario: userId
            })
            const result = await fetch("http://localhost:8081/report/generar", {
                method: "POST",

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objt)
            });
            const parsedResponse = await result.json();
            setPdf(parsedResponse);
            let url = setRequest(pdf);
            setPdfUrl(url);
        } catch (error) {
            console.log("Error xd", error);
        }

    }



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
                <input id='reportId' type='text' defaultValue={reportId}/*Traer id reporte*/></input>
                <input id='userId' type='text' defaultValue={userId}/*Traer id usuario*/></input>
            </div>
            <div>
                <select className="form-control" id="facultad" value={statusF} onChange={(e) => setStatusF(e.target.value)} onMouseOver={loadGrupo(grupo, statusF)}>
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
                <select className="form-control" id="proyecto" value={statusPj} onChange={(e) => setStatusPj(e.target.value)}>
                    <option value="0">--Proyecto--</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={fetchPdfData}>Generar reporte</button>
            </div>

        </div>
        <div id="pdf">
            <div className="pdf-section">
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    {pdfUrl && (
                        <Viewer fileUrl={pdfUrl} plugins={[getFilePluginInstance]} />
                    )}
                </Worker>
            </div>
        </div>
        <div className="flex-container-center">
            <button type="button" className="download-button"><Download /></button>
        </div>

    </>

}

export default FacGISemProy;
