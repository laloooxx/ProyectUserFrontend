import { useState, useEffect } from "react";
import { updateUser } from "../service/api";


export default function UpdateUser() {
    const [users, setUsers] = useState([]);
    const [userUpdate, setUserUpdate] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
    })

    useEffect(() => {
        updateUser().then(setUsers);
    }, []);

    return users;
};