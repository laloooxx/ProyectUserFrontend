import { Routes, Route } from 'react-router-dom';
import UserForm from '../component/FormCreatedUser';
import UserTable from '../component/UserTable';
import UserUpdateForm from '../component/UserUpdateForm';
import EliminarUser from '../component/UserDelete'
import CarruselMessi from '../component/Carrusel';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/inicio-carrusel' element={<CarruselMessi />} />
            <Route path='/crear-usuario' element = {<UserForm />} />
            <Route path='/usuarios' element = {<UserTable />} />
            <Route path='/actualizarUsuario/:id'element= {<UserUpdateForm />} />
            <Route path='/eliminarUsuario/:id'element= {<EliminarUser />} />
        </Routes>
    )
}