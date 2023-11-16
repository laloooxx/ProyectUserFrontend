import { useState, useEffect } from "react";
import { getUsers } from '../service/api';


/**
 * Creamos un hook personalizado para mostrar los usuarios en una tabla y usar el hook en otro componente
 * @returns los usuarios de nuestra base de datos
 * Creamos el estado de los usuarios y usamos el useEffect para modificar ese estado, devolviendo los usuarios si los hay en la bd
 */
export function useUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers()
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, []);

    return { loading, users };
}