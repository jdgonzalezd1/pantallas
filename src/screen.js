import { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';


function Screen() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    return <>
        <div class="flex-container">
            <div>
                <select name="facultad" defaultValue="0">
                    <option value="0">--Facultad--</option>
                    <option value="1">Ingeniería</option>
                    <option value="2">Otro</option>
                </select>
            </div>
            <div>
                <select name="grupoInvestigacion" defaultValue="0">
                    <option value="0">--Grupo--</option>
                    <option value="1">Grupo A</option>
                    <option value="2">Grupo B</option>
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
            <button type="button" class="download-button"><Download/></button> 
        </div>
    </>

}

export default Screen;