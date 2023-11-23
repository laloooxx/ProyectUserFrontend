import { useState, useEffect } from "react";
import { getPublicaciones } from '../service/apiPublicaciones';
import { PostContext, usePostContext } from "../context/PostsContext";


/**
 * Creamos un hook personalizado para mostrar los usuarios en una tabla y usar el hook en otro componente
 * @returns los usuarios de nuestra base de datos
 * Creamos el estado de los usuarios y usamos el useEffect para modificar ese estado, devolviendo los usuarios si los hay en la bd
 */
export function usePosts() {
    const { loading, userLogeeado} = usePostContext();
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        getPublicaciones()
            .then((data) => {
                setPosts(data);
                loading(false);
            })
            .catch((error) => {
                loading(false);
                console.log(error);
            });
    }, []);

    return { loading, posts };
}