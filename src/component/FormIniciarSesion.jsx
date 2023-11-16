import { useContext, useState } from "react";
import { UserContext, useUserContext } from '../context/UserContext';
import '../estilos/createdUser.css'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Link, useNavigate } from 'react-router-dom'
import { verifyUser, getUserById } from "../service/api";
import App from "../App";
import { ParseToken } from "../../pages/Login";


function FormLogin() {

    //creamos los estados de los valores q vamos a recibir para poder actualziar
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loggin, setLoggin] = useState(false);


    //usamos la instancia de mi contexto
    const { setUsers, loginUser } = useUserContext();

    const navigate = useNavigate();

    //creamos la funcion para q obtenga los datos del formulario
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error('Correo electrónico y contraseña son obligatorios');
            return
        }
        const data = {
            email: email,
            password: password
        }


        try {
            //guardamos en una constante la verificacion de datos
            const response = await verifyUser(data);
            console.log("resp de la data con el token del verifyuser ",response.data.token);
            
            
            const token = response.data.token;
            localStorage.setItem('token', token);


            const { id } = ParseToken(token);
            console.log('id:', id);

            const result = response.data;
            console.log("respuesto del verify user con la data ", result);

            //seteamos los datos y definimos q es un array
            setUsers(prev => {
                if (Array.isArray(prev)) {
                    return [...prev, data];
                } else {
                    return [data];
                }
            });
            

            console.log(result.token); 
            //consultamos si devuelve el token al recuperar los datos y si es asi seteamos el token y cambiamos el estado del formulario y navegamos a otra pagina
            if (result.token) {
                localStorage.setItem('token', result.token)

                //estas lineas de codigo son para el perfil de usuario 
                const userData = await getUserById(ParseToken(result.token).id );

                loginUser(userData);
                setLoggin(true);

                
                navigate('/app');
            };

        } catch (error) {
            console.error('Error al verificar el usuario', error);
            error.message;
        }
    };


    //creando la funcion para crear usuarios con un formulario de prime, y usando una condicional para verificar si nos logeamos q nos mande a otra pantalla
    return (
        <>{loggin ? <App /> :
        <div className="card flex justify-content-center">
            <h2>Iniciar sesion</h2>
            <form onSubmit={handleLogin} className="user-form">
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
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                    <label htmlFor="password" style={{paddingLeft: '30px'}}>Contraseña</label>
                </span>
                <Button type="submit" label="Iniciar Sesion" />
            </form>

            <Link to="/home">No tienes cuenta? Registrate!!!</Link>
        </div>}
        </>
    )
};

export default FormLogin;