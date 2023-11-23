import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import AppRoutes from '../src/routes/Routes';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PostContextProvider from './context/PostsContext';


//renderizamos el archivo de mis rutas, para ya tener todo el acceso a mis rutas.
ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider >
        <PostContextProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </PostContextProvider>
    </UserContextProvider>
);