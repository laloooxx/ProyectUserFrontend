import { useContext, useState } from "react";
import {UserContext } from '../context/UserContext';
import {createUser} from '../service/api';
import '../estilos/createdUser.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Link, useNavigate } from 'react-router-dom'
import Login from '../../pages/Login';





const required = (value) => {
    if (!value) {
        return (
          <div className="alert alert-danger" role="alert">
            This field is required!
          </div>
        );
      }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
};

function UserForm() {

    //creamos los estados de los valores q vamos a recibir para poder actualziar
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    
    const { users, setUsers } = useContext(UserContext);
    

    const navigate = useNavigate();


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    //creando la funcion para crear usuarios con un formulario
    const handleSubmit = async (Event) => {
        //este metodo detiene la renderizacion automatica
        Event.preventDefault();
        //guardamos los valores q devuelve en una variable y decimos q espere a la peticion de la base de datos y seteamos los valores
        const data = {
            username,
            password,
            email,
        };
        console.log(data);
        await createUser(data);
        setUsers(prev => [...prev, data])


        navigate('/');
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
                        onChange={ onChangeEmail }
                        validations= {[required, validEmail]}
                    />
                    <label htmlFor ="email">Correo electronico</label>
                </span>
                <span className="p-float-label">
                    <InputText
                        id="username"
                        name="username"
                        value={username}
                        onChange={ onChangeUsername }
                        validateOnly= {[required, vusername]}
                    />
                    <label htmlFor ="username">Nombre de usuario</label>
                </span>
                <span className="p-float-label">
                    <Password value={password} onChange={ onChangePassword } validations={[required, vpassword]} />
                    <label htmlFor="password">Contraseña</label>
                </span>
                <Button type="submit" label="Registrar" />
            </form>

            <Link to="/">Tienes cuenta? Inicia sesión</Link>
        </div>
    )
};

export default UserForm;