import { useState, useEffect } from "react";
import { getUsers } from '../service/api';


/**
 * Creamos un hook personalizado para mostrar los usuarios en una tabla y usar el hook en otro componente
 * @returns retornamos los usuarios de nuestra base de datos
 * Creamos el estado de los usuarios y usamos el useEffect para modificar ese estado, devolviendo los usuarios si los hay en la bd
 */
export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers().then(setUsers);
    }, []);

    return users;
}