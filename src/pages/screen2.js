import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

//const grupoInv = ["Grupo A", "Grupo B"];
//const semilleros = ["---", "Semillero A", "Semillero B"];
//const proyectos = ["---", "Proyecto A", "Proyecto B", "Proyecto C"]

function loadJson(data,element) {
    while(element.options.length > 1){
        element.remove(1);
    }
    var opt = null;
    data.map((item) => {
        opt = document.createElement('option');
        opt.value = item.id;
        opt.innerHTML = item.nombre;
        element.appendChild(opt);
    })
    
}

function loadGrupo(data, status) {
    try {
        var gruposInv = document.getElementById("grupoInvestigacion");
        switch (status) {
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


function Screen2() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const [facultad, setFacultad] = useState([]);
    const [grupo, setGrupo] = useState([]);
    const [statusF, setStatusF] = useState("");
    const [statusG, setStatusG] = useState("");

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

    useEffect(() => {
        fetchFacultadData();
        fetchGrupoData();
    }, []);

    return <>
        <div class="flex-container">
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
                <select id="grupoInvestigacion" value={statusG} onChange={(e) => setStatusG(e.target.value)}>
                    <option value="0">--Grupo--</option>                    
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

export default Screen2;