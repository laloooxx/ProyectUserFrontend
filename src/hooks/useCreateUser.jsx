import { useState, useEffect } from "react";
import { createUser } from "../service/api";


//creamos un hook para crear usuarios nuevos
export default function CreateUsers() {
    const [users, setUsers] = useState([{
        id: 0,
        username: '',
        password: '',
        email: '',
    }]);

    useEffect(() => {
        createUser().then(setUsers);
    }, []);
    return users;
}