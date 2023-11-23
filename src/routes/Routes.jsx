import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserForm from '../component/FormCreatedUser';
import UserTable from '../component/UserTable';
import UserUpdateForm from '../component/UserUpdateForm';
import EliminarUser from '../component/UserDelete'
import CarruselMessi from '../component/Carrusel';
import Login from '../../pages/Login';
import InicioApp from '../../pages/Inicio'
import Home from '../../pages/Home';
import App from '../App';
import UserProfile from '../component/UserProfile';
import { ProtectedRoute } from './ProtectedRoutes';
import PagesPosts from '../../pages/Publicaciones';
import { useUserContext } from '../context/UserContext';


//creamos un archivo para manejar las rutas de mi pagina, tenemos cada ruta definida para poder acceder a cada componente
export default function AppRoutes() {
    const { userLogeado } = useUserContext();
    console.log(userLogeado);
    return (
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path='/app/*' element={<App />} />
                </Route>
                    <Route path='/perfil' element={<UserProfile />} />
                    <Route path='/inicio/*' element={<InicioApp />} />
                    <Route path='/carrusel' element={<CarruselMessi />} />
                    <Route path='/publicaciones' element={<PagesPosts />} />
                    <Route path='/crear-usuario' element = {<UserForm />} />
                    <Route path='/usuarios' element = {<UserTable />} />
                    <Route path='/actualizarUsuario/:id'element= {<UserUpdateForm />} />
                    <Route path='/eliminarUsuario/:id'element= {<EliminarUser />} />
                <Route path='*' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
    )
}