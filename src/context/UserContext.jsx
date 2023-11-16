import { createContext, useContext, useEffect, useState } from "react";
import { getUsers, getUserById } from "../service/api";
import { ParseToken } from "../../pages/Login";

//creamos un contexto para usar en mi aplicacion
export const UserContext = createContext();
//lo exportamos
export const useUserContext = () => useContext(UserContext);

//lo instanciamos
export default function UserContextProvider({ children }) {
    const [users, setUsers] = useState([]);
    //agregamos un estado loading para indicar si la carga de usuarios está en progreso o ha terminado
    const [loading, setLoading] = useState(true);
    //un nuevo estado para almacenar el usuario que ha iniciado sesión
    const [userLogeado, setUserLogeado] = useState(null);
    
    //manejamos la obtencion de usuarios con el hook useEffect para manejar el estado,
    useEffect(() => {
        async function obtenerUsuarios() {
            try {
                const usuarios = await getUsers();
                if (Array.isArray(usuarios)) {
                    setUsers(usuarios);
                    setLoading(false);
                }else {
                    console.error("Error: los usuarios no son un array");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error al cargar usuarios", error);
                setLoading(false);
            }
        }
    
    obtenerUsuarios();
    }, []);

    useEffect(() => {
        async function cargarUsuarioAlmacenado() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await getUserById({ userId: ParseToken(token).userId });
                    console.log(userData);
                    loginUser(userData);
                } catch (error) {
                    console.error('Error al cargar el usuario almacenado:', error);
                    logoutUser();
                }
            }
            setLoading(false);
        }

        cargarUsuarioAlmacenado();
    }, []);
    

    const loginUser = (user) => {
        setUserLogeado(user);
    };

    const logoutUser = () => {
        setUserLogeado(null);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={ {users, setUsers, loading, logoutUser, loginUser, userLogeado }}>
            {children}
        </UserContext.Provider>
    );
}