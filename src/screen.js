import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';



function Screen() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [facultad, setFacultad] = useState([]);

    const fetchFacultadData = () => {
        fetch("http://localhost:8081/info/facultad/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFacultad(data)
            })
    }

    useEffect(() => {
        fetchFacultadData()
    }, []);




    return <>
        <div class="flex-container">
            <div>
                {facultad.length > 0 && (
                    <select name="facultad" defaultValue="0">
                        <option value="0">--Facultad--</option>
                        {facultad.map(facu => (
                            <option value={facu.id}>{facu.nombre}</option>
                        ))}
                    </select>
                )}
            </div>
            <div>
                <select name="grupoInvestigacion" defaultValue="0">
                    <option value="0">--Grupo--</option>
                </select>
            </div>

            <div>
                <select name="semillero" defaultValue="0">
                    <option value="0">--Semillero--</option>
                    <option value="1">Semillero A</option>
                    <option value="2">Semillero B</option>
                </select>
            </div>
            <div>
                <select name="proyecto" defaultValue="0">
                    <option value="0">--Proyecto--</option>
                    <option value="1">Proyecto A</option>
                    <option value="2">Proyecto B</option>
                </select>
            </div>
            <div>
                <button type="button">Generar reporte</button>
            </div>
        </div>
        <div>
            <div class="pdf-section">
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <Viewer fileUrl="/Resources/boleta.pdf" plugins={[getFilePluginInstance]} />
                </Worker>
            </div>
        </div>
        <div class="flex-container-center">
            <button type="button" class="download-button"><Download /></button>
        </div>

    </>

}

export default Screen;