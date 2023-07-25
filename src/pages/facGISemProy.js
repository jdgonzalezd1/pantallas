import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { setRequest, repNames } from '../services/loadData';

//Funcionalidad lista
//Pendiente reciclaje

/*
Funcion de despliegue de pantalla
*/

function FacGISemProy() {
    /*
    Funciones de carga de datos desde la API
    */
    let request = {};
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [pdfUrl, setPdfUrl] = useState("");
    const [userId, setUserId] = useState("1000689373");
    const location = useLocation();
    const { reportId } = location.state;

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
            request = {
                dato: statusPj,
                reporte: reportId,
                usuario: userId
            }
            const result = await fetch("http://localhost:8081/report/generar", {
                method: "POST",

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            const parsedResponse = await result.json();
            let url = setRequest(parsedResponse);
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

    const fetchGrupoData = async (facultad) => {
        try {
            request = {
                facultad
            }
            const result = await fetch("http://localhost:8081/filtro/facultad/gi", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            const parsedResponse = await result.json();
            setGrupo(parsedResponse);
        } catch (error) {
            console.log("Error", error);
        }
    }

    const fetchSemilleroData = async (gi) => {
        try {
            request = {
                gi
            }
            const result = await fetch("http://localhost:8081/filtro/facultad/gi/semillero", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            const parsedResponse = await result.json();
            setSemillero(parsedResponse);
        } catch (error) {
            console.log("ªªªªªªErrorªªªªªª", error);
        }
    }

    const fetchProyectoData = async (semillero) => {
        try {
            request = {
                semillero
            }
            const result = await fetch("http://localhost:8081/filtro/facultad/gi/semillero/proyecto", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            const parsedResponse = await result.json();
            setProyecto(parsedResponse);
        } catch (error) {
            console.log("ªªªªªªErrorªªªªªª", error);
        }
    }


    useEffect(() => {
        fetchFacultadData();
    }, []);

    const handleFacultySelected = async (event) => {
        setStatusF(event.target.value);
        await fetchGrupoData(event.target.value);
    }

    const handleGISelected = async (event) => {
        setStatusG(event.target.value);
        await fetchSemilleroData(event.target.value);
    }

    const handleSemSelected = async (event) => {
        setStatusS(event.target.value);
        await fetchProyectoData(event.target.value);
    }

    /*
    Funcion de renderizado
    */
    return <>
        <div>
            <h1>{repNames[reportId]}</h1>
        </div>
        <div className="flex-container">
            <div>
                <select id="facultad"
                    value={statusF}
                    onChange={async (e) => await handleFacultySelected(e)}
                    className='select-general'
                >
                    <option value="0">--Facultad--</option>
                    {facultad.length > 0 && (
                        <>
                            {facultad.map(facu => (
                                <option value={facu.id} key={facu.id}>{facu.nombre}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
            <div>
                <select id="grupoInvestigacion"
                    value={statusG}
                    onChange={async (e) => await handleGISelected(e)}
                    className='select-general'
                >
                    <option value="0">--Grupo--</option>
                    {grupo.length > 0 && (
                        <>
                            {grupo.map(group => (
                                <option value={group.id} key={group.id}>{group.nombre}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>

            <div>
                <select id="semillero"
                    value={statusS}
                    onChange={async (e) => await handleSemSelected(e)}
                    className='select-general'
                >
                    <option value="0">--Semillero--</option>
                    {semillero.length > 0 && (
                        <>
                            {semillero.map(sem => (
                                <option value={sem.id} key={sem.id}>{sem.nombre}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
            <div>
                <select id="proyecto"
                    value={statusPj}
                    onChange={(e) => setStatusPj(e.target.value)}
                    className='select-general'
                >
                    <option value="0">--Proyecto--</option>
                    {proyecto.length > 0 && (
                        <>
                            {proyecto.map(item => (
                                <option value={item.id} key={item.id}>{item.titulo}</option>
                            ))}
                        </>
                    )}
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
            <div role="button" className="download-button">
                <Download />
            </div>
        </div>

    </>

}

export default FacGISemProy;
