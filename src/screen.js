import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

const grupoInv = ["Grupo A", "Grupo B"];
//const semilleros = ["---", "Semillero A", "Semillero B"];
//const proyectos = ["---", "Proyecto A", "Proyecto B", "Proyecto C"]


function loadGrupo() {
    var facultad = document.getElementById("facultad").value;
    var gruposInv = document.getElementById("grupoInvestigacion");
    switch (facultad) {
        case '1001':
            var grupos = grupoInv;
            var numGrupos = grupos.length;
            for(var i = 0; i<numGrupos; i++){
                var opt = document.createElement('option');
                //Nota: Establecer valor de forma dinámica
                opt.value = i;
                opt.innerHTML = grupos[i];
                //Nota: Establecer opción de forma dinámica
                gruposInv.appendChild(opt);
            }
            break;
        default:
            break;
    }
    /*
    if (facultad === 1001) {
        var grupos = grupoInv;
        var numGrupos = grupos.length;
        document.filtros.grupoInvestigacion.length = numGrupos;
        for (var i = 0; i < numGrupos; i++) {
            document.filtros.grupoInvestigacion.options[i].value = grupos[i];
            document.filtros.grupoInvestigacion.options[i].text = grupos[i];
        }
    } else {
        document.filtros.grupoInvestigacion.length = 1;
    }

    document.filtros.grupoInvestigacion.options[0].selected = true;
    */
}


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
                <select id="grupoInvestigacion" defaultValue="0">
                    <option value="0">--Grupo--</option>
                </select>
            </div>

            <div>
                <select name="semillero" defaultValue="0">
                    <option value="0">--Semillero--</option>
                </select>
            </div>
            <div>
                <select name="proyecto" defaultValue="0">
                    <option value="0">--Proyecto--</option>
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