import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { deleteUser, getUserById } from "../service/api";
import { useNavigate } from 'react-router-dom'


export default function EliminarUser() {
    const { id } = useParams()
    /**
     * useHistory y useNavigate son hooks proporcionado por React Router que te permite acceder al historial de navegación de tu aplicación en un componente funcional. Te permite realizar acciones de navegación como redireccionar a otras rutas o retroceder en la historia de navegación.
     */
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);

    useEffect (() => {
        getUserById(id)
            .then((userData) =>{
                setUser(userData);
            })
    }, [id]);

    const handleDeleteUser = async () =>{
        try {
            await deleteUser(id);
            navigate("/Usuarios")
        } catch (error) {
            console.error("Error al eliminar el usuario: ", error);
        }
    };
    return (
        <>
        {user ? (
            <div>
                <h2>¿Estas seguro q queres eliminar al usuario: {user.username}?</h2>
                <button onClick={handleDeleteUser}>Confirmar</button>
                <button onClick={() => navigate("/Usuarios")}>Cancelar</button>
            </div>
        ) : (
            <p>... Cargando detalles del usuario</p>
        )}
        </>
    )
}