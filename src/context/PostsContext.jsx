import { ParseToken } from "../../pages/Login";
import { createContext, useContext, useEffect, useState } from "react";
import { getPublicaciones, getPublicacionesById } from "../service/apiPublicaciones";
import { getUserById } from "../service/api";


export const PostContext = createContext();

export const usePostContext =() => useContext(PostContext);

export default function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([]);
    //agregamos un estado loading para indicar si la carga de usuarios está en progreso o ha terminado
    const [loading, setLoading] = useState(true);
    //un nuevo estado para almacenar el usuario que ha iniciado sesión
    const [userLogeado, setUserLogeado] = useState(null);


    
    //manejamos la obtencion de publicaciones con el hook useEffect para manejar el estado,
    useEffect(() => {
        async function obtenerPublicaciones() {
            try {
                const response = await getPublicaciones();
                if (Array.isArray(response)) {
                    console.log(response)
                    setPosts(response);
                    setLoading(false);
                }else {
                    console.error("Error: las publicaciones no son un array");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error al cargar publicaaciones", error);
                setLoading(false);
            }
        }
    
    obtenerPublicaciones();
    }, []);

    useEffect(() => {
        async function cargarPostsDelUserLogeado() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const { id } = ParseToken(token);
                    console.log("id del contexto ",id);
                    if (id) {
                        const userData = await getUserById( id );
                        console.log(userData);
                        loginUser(userData);
                    } else {
                        console.error('El id es undefined');
                        logoutUser();
                    }
                } catch (error) {
                    console.error('Error al cargar el usuario almacenado:', error);
                    logoutUser();
                }
            }
            setLoading(false);
        }
    
        cargarPostsDelUserLogeado();
    }, []);
    

    const loginUser = (user) => {
        setUserLogeado(user);
    };


    return (
        <PostContext.Provider value={ {posts, setPosts, loading, loginUser, userLogeado }}>
            {children}
        </PostContext.Provider>
    );
}