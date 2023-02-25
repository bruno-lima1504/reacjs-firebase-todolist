import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Admin from '../Pages/Admin';

import Private from './private';

export function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/register" element={ <Register/> } />
            
            <Route path="/admin" element={ <Private> <Admin/> </Private> } />
        </Routes>
    )
}

