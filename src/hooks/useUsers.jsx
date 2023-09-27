import { useState, useEffect } from "react";
import { getUsers } from '../service/api';

export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers().then(setUsers);
    }, []);

    return users;
}