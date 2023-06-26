import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';


//Datos de prueba
//const grupoInv = ["Grupo A", "Grupo B"];
const semillerosA = ["Semillero A", "Semillero B"];
const semillerosB = ["Semillero C", "Semillero D"];

/*
Funciones de escritura de datos en la pantalla
*/
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
                opt.value = i + 1;
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
                opt.value = i + 1;
                opt.innerHTML = semi[i];
                //Nota: Establecer opción de forma dinámica
                semilleros.appendChild(opt);
            }
            break;
        default:
            break;
    }
}

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

    /*
    Funcion de renderizado
    */
    return <>
        <div className="flex-container">
            <div>
                <select id="faculty" defaultValue="0" onChange={loadGrupo(grupo)}>
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

/*
           for (var i = 0; i < numGrupos; i++) {
               var opt = document.createElement('option');
               //Nota: Establecer valor de forma dinámica
               opt.value = i + 1;
               opt.innerHTML = grupos[i];
               //Nota: Establecer opción de forma dinámica
               gruposInv.appendChild(opt);
           }
           */