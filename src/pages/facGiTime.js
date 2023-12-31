import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { setRequest, repNames } from '../services/loadData';
import { useLocation } from 'react-router-dom';

//Funcionalidad lista
//Pendiente limpieza y reciclaje

function FacGiTime() {
    let request = {};
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [facultad, setFacultad] = useState([]);
    const [grupo, setGrupo] = useState([]);
    const [statusF, setStatusF] = useState("");
    const [statusG, setStatusG] = useState("");
    const [statusIni, setStatusIni] = useState("");
    const [statusFin, setStatusFin] = useState("");

    const [userId, setUserId] = useState("1000689373");
    const location = useLocation();
    const { reportId } = location.state;

    const [pdfUrl, setPdfUrl] = useState("");

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

    const fetchPdfDataTime = async () => {
        try {
            request = {
                dato: statusG,
                reporte: reportId,
                usuario: userId,
                inicio: statusIni,
                fin: statusFin
            }
            const result = await fetch("http://localhost:8081/report/generar/anios", {
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

    useEffect(() => {
        fetchFacultadData();
    }, []);

    const handleFacultySelected = async (event) => {
        setStatusF(event.target.value);
        await fetchGrupoData(event.target.value);
    }

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
                    onChange={(e) => setStatusG(e.target.value)}
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
                <select id="anoIni"
                    value={statusIni}
                    onChange={(e) => setStatusIni(e.target.value)}
                    className='select-general'
                >
                    <option value="0">--Año inicial--</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            <div>
                <select id="anoFin"
                    value={statusFin}
                    onChange={(e) => setStatusFin(e.target.value)}
                    className='select-general'
                >
                    <option value="0">--Año Final--</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            <div>
                <button type="button" onClick={fetchPdfDataTime}>Generar reporte</button>
            </div>

        </div>
        <div>
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

export default FacGiTime;