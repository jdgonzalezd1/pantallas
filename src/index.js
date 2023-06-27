import React from 'react';
import ReactDOM from 'react-dom/client';
import FacGISemProy from './pages/facGISemProy';
import Screen2 from './pages/screen2';
import Screen3 from './pages/screen3';
import Screen4 from './pages/screen4';
import Screen5 from './pages/screen5';
import UploadAndDisplayImage from './pages/firma';
import Layout from './pages/menu';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="facGISemProy" element={<FacGISemProy />}/>
                    <Route path="screen2" element={<Screen2 />}/>
                    <Route path="screen3" element={<Screen3 />}/>
                    <Route path="screen4" element={<Screen4 />}/>
                    <Route path="screen5" element={<Screen5 />}/>
                    <Route path="firma" element={<UploadAndDisplayImage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//const extra = ReactDOM.createRoot(document.getElementById('extra'));


