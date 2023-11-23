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
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    //usamos la instancia de mi contexto
    const { setUsers, loginUser } = useUserContext();

    const navigate = useNavigate();

    //creamos la funcion para q obtenga los datos del formulario
    const handleLogin = async (e) => {
        e.preventDefault();

        //Limpiamos los mensajes de error al intentar iniciar sesión nuevamente
        setEmailError("");
        setPasswordError("");


        //mostramos mensajes de error 
        if (!email || !password) {
            if (!email) setEmailError("Correo electronico es obligatorio");
            if (!password) setPasswordError("La contraseña es obligatoria");
            return;
        }
        const data = {
            email: email,
            password: password
        }


        //creamos una funcion para manejar los errores y no errores
        try {
            //guardamos en una constante la verificacion de datos
            const response = await verifyUser(data);
            console.log("resp de la data con el token del verifyuser ",response.data.token);
            
            //creamos una constante donde vamos a almacenar el token
            const token = response.data.token;
            localStorage.setItem('token', token);

            //creamos una constante donde vamos a almacenar el id q recuperamos del token
            const { id } = ParseToken(token);
            console.log('id:', id);

            //creamos una constante donde vamos a almacenar la respuesa q devuelve con la data q trae
            const result = response.data;
            console.log("respuesta del verify user con la data ", result);

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
            //en caso de q haya error lo manejamos x aca
        } catch (error) {
            console.log('Error al verificar el usuario', error);
            if (error.response && error.response.status === 401) {
                setPasswordError("Correo electronico o contraseñas incorrectos")
            } else {
                setEmailError("Error al iniciar sesion");
            }
            return;
        }
    };


    //creando la funcion para crear usuarios con un formulario de prime, y usando una condicional para verificar si nos logeamos q nos mande a otra pantalla
    return (
        <>{!loggin ? (
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
                        <label htmlFor="password" style={{paddingLeft: '80px'}}>Contraseña</label>
                    </span>
                    <Button type="submit" label="Iniciar Sesion" />
                </form>

                <div className="error-mesage">
                    {emailError && <p>{emailError}</p>}
                    {passwordError && <p>{passwordError}</p>}
                </div>

                <Link to="/home">No tienes cuenta? Registrate!!!</Link>
            </div>
            ) : (
                <App />
            )}
        </>
    )
};

export default FormLogin;