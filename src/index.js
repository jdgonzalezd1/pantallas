import React from 'react';
import ReactDOM from 'react-dom/client';
import FacGi from './pages/facGi';
import FacGiSem from './pages/facGiSem';
import FacProg from './pages/facProg';
import Fac from './pages/fac';
import FacGISemProy from './pages/facGiSemProy';
import FacGiSemTime from './pages/facGiSemTime';
import FacGiTime from './pages/facGiTime';
import UploadAndDisplayImage from './pages/firma';
import Layout from './pages/menu';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './userMenu/admin';
import CoorInv from './userMenu/coordinadorInvestigacion';
import Decano from './userMenu/decano';
import DirGrupoInv from './userMenu/directorGrupoInvestigacion';
import DirInv from './userMenu/directorInvestigacion';
import DirProg from './userMenu/directorPrograma';
import DoceInv from './userMenu/docenteInvestigador';
import LiderInv from './userMenu/liderInvestigacion';
import LiderSem from './userMenu/liderSemillero';
import Semillerista from './userMenu/semillerista';


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="facGiSemProy" element={<FacGISemProy />}/>
                    <Route path="facGi" element={<FacGi />}/>
                    <Route path="facGiSem" element={<FacGiSem />}/>
                    <Route path="facProg" element={<FacProg />}/>
                    <Route path="fac" element={<Fac />}/>
                    <Route path="facGiSemTime" element={<FacGiSemTime />}/>
                    <Route path="facGiTime" element={<FacGiTime />}/>
                    <Route path="firma" element={<UploadAndDisplayImage />}/>
                    <Route path="admin" element={<Admin />}/>
                    <Route path="coordinadorInvestigacion" element={<CoorInv />}/>
                    <Route path="decano" element={<Decano />}/>
                    <Route path="directorGrupoInvestigacion" element={<DirGrupoInv />}/>
                    <Route path="directorInvestigacion" element={<DirInv />}/>
                    <Route path="directorPrograma" element={<DirProg />}/>
                    <Route path="docenteInvestigador" element={<DoceInv />}/>
                    <Route path="liderInvestigacion" element={<LiderInv />}/>
                    <Route path="liderSemillero" element={<LiderSem />}/>
                    <Route path="semillerista" element={<Semillerista />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


