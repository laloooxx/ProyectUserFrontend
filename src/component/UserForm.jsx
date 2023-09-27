import { useContext, useState } from "react";
import {UserContext } from '../context/UserContext';
import {createUser} from '../service/api';



function UserForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const { users, setUsers } = useContext(UserContext);



    
    //creando la funcion para crear usuarios con un formulario
    const handleSubmit = async (Event) => {
        //este metodo detiene la renderizacion automatica
        Event.preventDefault();
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
        //un formulario de bootstrap
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" value={username} onChange={(Event) => setUsername(Event.target.value)}/>
                <label htmlFor ="floatingInput">Nombre de usuario</label>
            </div>
            <br />
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(Event) => setEmail(Event.target.value)}/>
                <label htmlFor ="floatingInput">Correo electronico</label>
            </div>
            <br />
            <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Contraseña" value={password} onChange={(Event) => setPassword(Event.target.value)} />
                <label htmlFor ="floatingPassword">Contraseña</label>
            </div>
            <br />
            <br />
            <button type="submit" style={{color: 'white'}}>Enviar</button>
        </form>
    )
};

export default UserForm;