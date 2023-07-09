import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { loadPrograma, setRequest } from './loadData';
import { useLocation } from 'react-router-dom';

//Funcionalidad lista
//Pendiente limpieza y reciclaje


function FacProg() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [facultad, setFacultad] = useState([]);
    const [programa, setPrograma] = useState([]);
    const [statusF, setStatusF] = useState("");
    const [statusP, setStatusP] = useState("");

    const [objt, setObjt] = useState({});
    const [userId, setUserId] = useState("1000689373");
    const location = useLocation();
    const { reportId } = location.state;

    const [pdf, setPdf] = useState([]);
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

    const fetchProgramaData = async () => {
        try {
            setObjt({
                facultad: statusF
            })
            const result = await fetch("http://localhost:8081/filtro/facultad/programa", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objt)
            });
            const parsedResponse = await result.json();
            setPrograma(parsedResponse);
        } catch (error) {
            console.log("Error", error);
        }
    }

    const fetchPdfData = async () => {
        try {
            setObjt({
                dato: statusP,
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

    useEffect(() => {
        fetchFacultadData();
    }, []);




    return <>
        <div className="flex-container">
            <div hidden>
                <input id='reportId' value={reportId} type='text'></input>
                <input id='userId' value={userId} type='text'></input>
            </div>
            <div>
                <select id="facultad"
                    value={statusF}
                    onChange={(e) => setStatusF(e.target.value)}
                    onMouseOut={fetchProgramaData}
                >
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
                <select id="programa"
                    value={statusP}
                    onChange={(e) => setStatusP(e.target.value)}
                    onMouseOver={loadPrograma(programa, statusF)}
                >
                    <option value="0">--Programa--</option>
                </select>
            </div>

            <div>
                <button type="button" onClick={fetchPdfData}>Generar reporte</button>
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
            <button type="button" className="download-button"><Download /></button>
        </div>

    </>

}

export default FacProg;