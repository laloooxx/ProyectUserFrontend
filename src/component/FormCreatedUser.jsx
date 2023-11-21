import { useContext, useState } from "react";
import {UserContext } from '../context/UserContext';
import {createUser} from '../service/api';
import '../estilos/createdUser.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Link, useNavigate } from 'react-router-dom'
import {isEmail} from 'validator'


//creamos constantes para poner requirimientos, tanto en el email como username y password, para avisar q son campos obligatorios y valores necesarios
const required = (value, fieldName) => {
  if (!value) {
    return `${fieldName} es obligatorio.`;
  }
}
const validEmail = (value) => {
  if (!value) {
    return "Correo electrónico es obligatorio.";
  }

  if (!isEmail(value)) {
    return "Este no es un correo electrónico válido.";
  }
};

const vusername = (value) => {
  if (!value) {
    return 'Este campo es obligatorio.'
  }

  if (value.length < 3 || value.length > 20) {
    return 'El nombre de usuario debe tener entre 3 y 20 caracteres.'
  }
};

const vpassword = (value) => {
  if (!value) {
    return 'Este campo es obligatoria.'
  }
}


function UserForm() {

    //creamos los estados de los valores q vamos a recibir para poder actualziar
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    //creamos estados para manejar errores 
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    //llamamos al contexto con lo q necesitemos del contexto
    const { users, setUsers } = useContext(UserContext);
    

    //usamos el usenavigate para manejar el control de rutas
    const navigate = useNavigate();


    //creamos funciones flechas para manejar la obtencion de datos cuando al agregar valores a los respectivos campos y seteando si hay errores tanto en el email, password y username
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
        setUsernameError(required(username, 'Nombre de usuario') ||vusername(username));
      };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        setEmailError(required(email, 'Correo electronico') ||validEmail(email));
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
        setPasswordError(required(password, "Contraseña") ||vpassword(password));
      };

    //creando una funcion para manejar el evento cuando hacemos click para completar el formulario
    const handleSubmit = async (Event) => {
        //este metodo detiene la renderizacion automatica
        Event.preventDefault();

        //creamos constantes para devolver msjs de error
        const emailErrorMesagge = validEmail(email);
        const usernameErrorMesagge = required(username, 'Nombre de usuario');
        const passwordErrorMesagge = required(password, 'La contraseña');


        //seteamos los errores con sus mensajes
        setEmailError(emailErrorMesagge);
        setUsernameError(usernameErrorMesagge);
        setPasswordError(passwordErrorMesagge);


        //si alguno de ellos es validos lo mostramos
        if (emailErrorMesagge || passwordErrorMesagge || usernameErrorMesagge) {
          return;
        }
        //guardamos los valores q devuelve en una variable y decimos q espere a la peticion de la base de datos y seteamos los valores
        const data = {
            username,
            password,
            email,
        };


        //creamos una funcion para manejar la creacion de usuario y si hay errores y la navegacion en caso de q la creacion salga correcta
        try {
          const response = await createUser(data);
          if (!response.ok) {
            const errorMessage = handleServerError(response);
          } else {
            setUsers((prev) => [...prev, data]);
            navigate('/');
          }
        } catch (error) {
          const errorMessage = handleServerError(error);
          setUsernameError(errorMessage);
        }
    };
      

    //rceamos una funcion para manejar los errores q devuelve del backend y sus respuestas
    const handleServerError = (error) => {
      if (error.response && error.response.status === 403) {
        const responseData = error.response.data;

        console.log(responseData);

        if (responseData.msg) {
            return responseData.msg
        };
        console.error('Error del servidor:', responseData.msg);
      } else {
        console.error('Error del servidor:', error.message);
        return 'Error del servidor';
      }
    };

    
    //creamos el formulario para crear usuarios
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
                    />
                    <label htmlFor ="email">Correo electronico</label>
                {emailError && <div className="alert alert-danger">{emailError}</div>}
                </span>
                <span className="p-float-label">
                    <InputText
                        id="username"
                        name="username"
                        value={username}
                        onChange={ onChangeUsername }
                        feedback= {usernameError}
                    />
                    <label htmlFor ="username">Nombre de usuario</label>
                {usernameError && <div className="alert alert-danger">{usernameError}</div>}
                </span>
                <span className="p-float-label">
                    <Password value={password} onChange={ onChangePassword } toggleMask />
                    <label htmlFor="password" style={{paddingLeft: '30px'}}>Contraseña</label>
                {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                </span>
                <Button type="submit" label="Registrar" />
            </form>

            <Link to="/">Tienes cuenta? Inicia sesión</Link>
        </div>
    )
};

export default UserForm;