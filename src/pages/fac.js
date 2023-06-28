import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

function loadJson(data, element) {
    var opt = null;
    data.map((item) => {
        opt = document.createElement('option');
        opt.value = item.id;
        opt.innerHTML = item.value;
        element.appendChild(opt);
    })
}


function loadGrupo(data) {
    try {
        var facultad = document.getElementById("faculty").value;
        var gruposInv = document.getElementById("grupoInvestigacion");
        switch (facultad) {
            case '1001':
                loadJson(data, gruposInv);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log("Error", error);
    }
}


function Fac() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [facultad, setFacultad] = useState([]);

    const fetchFacultadData = async () => {
        try {
            const result = await fetch("http://localhost:8081/filtro/facultad");
            const parsedResponse = await result.json();
            setFacultad(parsedResponse);
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        fetchFacultadData()
    }, []);

    return <>
        <div hidden>
            <input id='reportId' type='text'></input>
            <input id='userId' type='text'></input>
        </div>
        <div className="flex-container">
            <div>
                <select id="facultad" defaultValue="0" onChange={loadGrupo}>
                    {facultad.length > 0 && (
                        <>
                            <option value="0">--Facultad--</option>
                            {facultad.map(facu => (
                                <option value={facu.id}>{facu.nombre}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
            <div>
                <button type="button">Generar reporte</button>
            </div>

        </div>
        <div>
            <div className="pdf-section">
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <Viewer fileUrl="/Resources/RepActGI-Solsytec-(2022-2023)-1000456123.pdf" plugins={[getFilePluginInstance]} />
                </Worker>
            </div>
        </div>
        <div className="flex-container-center">
            <button type="button" className="download-button"><Download /></button>
        </div>

    </>

}

export default Fac;