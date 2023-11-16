import { verifyUser } from '../service/api';
import { useState, useEffect } from "react";


//creamos un hook para verificar los datos del login
export default function VerficarDatos() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    useEffect(() =>{
        verifyUser().then(setEmail, setPassword)
    })

};