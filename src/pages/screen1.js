import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

const grupoInv = ["Grupo A", "Grupo B"];
const semillerosA = ["Semillero A", "Semillero B"];
const semillerosB = ["Semillero C", "Semillero D"];
//const proyectos = ["---", "Proyecto A", "Proyecto B", "Proyecto C"]


function loadGrupo() {
    var facultad = document.getElementById("facultad").value;
    var gruposInv = document.getElementById("grupoInvestigacion");
    switch (facultad) {
        case '1001':
            var grupos = grupoInv;
            var numGrupos = grupos.length;
            for (var i = 0; i < numGrupos; i++) {
                var opt = document.createElement('option');
                //Nota: Establecer valor de forma dinámica
                opt.value = i+1;
                opt.innerHTML = grupos[i];
                //Nota: Establecer opción de forma dinámica
                gruposInv.appendChild(opt);
            }
            break;
        default:
            break;
    }
}

function loadSemilleros() {
    var grupo = document.getElementById("grupoInvestigacion").value;
    var semilleros = document.getElementById("semillero");
    var semi = [];
    var numSemilleros = 0;
    switch (grupo) {
        case '1':
            semi = semillerosA;
            numSemilleros = semi.length;
            for (var i = 0; i < numSemilleros; i++) {
                var opt = document.createElement('option');
                //Nota: Establecer valor de forma dinámica
                opt.value = i+1;
                opt.innerHTML = semi[i];
                //Nota: Establecer opción de forma dinámica
                semilleros.appendChild(opt);
            }
            break;
        case '2':
            semi = semillerosB;
            numSemilleros = semi.length;
            for (var i = 0; i < numSemilleros; i++) {
                var opt = document.createElement('option');
                //Nota: Establecer valor de forma dinámica
                opt.value = i+1;
                opt.innerHTML = semi[i];
                //Nota: Establecer opción de forma dinámica
                semilleros.appendChild(opt);
            }
            break;
        default:
            break;
    }
}

function displayPdf(){
    let pdf = document.getElementById("pdf");
    pdf.removeAttribute("hidden");
}


function Screen1() {
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
                <select id="grupoInvestigacion" defaultValue="0" onChange={loadSemilleros}>
                    <option value="0">--Grupo--</option>
                </select>
            </div>

            <div>
                <select id="semillero" defaultValue="0">
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

export default Screen1;