import React from 'react';
import ReactDOM from 'react-dom/client';
import FacGi from './pages/facGi';
import FacGiSem from './pages/facGiSem';
import FacProg from './pages/facProg';
import Fac from './pages/fac';
import FacGISemProy from './pages/facGiSemProy';
import FacGiSemTime from './pages/facGiSemTime';
import FacGiTime from './pages/facGiTime';
import Admin from './userMenu/user1';
import UploadAndDisplayImage from './pages/firma';
import Layout from './pages/menu';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
                    <Route path="user1" element={<Admin />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


