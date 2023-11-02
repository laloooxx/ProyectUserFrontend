import { useEffect, useState } from "react";
import { deleteUser } from "../service/api";


export default function DeleteUser() {
    const [ users, setUsers] = useState();

    useEffect(() => {
        deleteUser().then(setUsers);
    })

    return users;
}