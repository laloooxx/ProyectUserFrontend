import { useContext, useState } from "react";
import {UserContext } from '../context/UserContext';
import {createUser} from '../service/api';
import '../estilos/createdUser.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';



function UserForm() {

    //creamos los estados de los valores q vamos a recibir para poder actualziar
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const { users, setUsers } = useContext(UserContext);


    //creando la funcion para crear usuarios con un formulario
    const handleSubmit = async (Event) => {
        //este metodo detiene la renderizacion automatica
        // Event.preventDefault();
        //guardamos los valores q devuelve en una variable y decimos q espere a la peticion de la base de datos y seteamos los valores
        const data = {
            username,
            password,
            email,
        };
        console.log(data);
        await createUser(data);
        setUsers(prev => [...prev, data])
    };


    return (
        <div className="card flex justify-content-center">
            <h2>Crear usuario</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <span className="p-float-label">
                    <InputText
                        id="email"
                        name="email"
                        value={email}
                        onChange={(Event) => setEmail(Event.target.value)}
                    />
                    <label htmlFor ="email">Correo electronico</label>
                </span>
                <span className="p-float-label">
                    <InputText
                        id="username"
                        name="username"
                        value={username}
                        onChange={(Event) => setUsername(Event.target.value)}
                    />
                    <label htmlFor ="username">Nombre de usuario</label>
                </span>
                <span className="p-float-label">
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                </span>
                <Button type="submit" label="Registrar" />
            </form>
        </div>
    )
};

export default UserForm;