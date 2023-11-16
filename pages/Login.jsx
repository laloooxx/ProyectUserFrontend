import FormLogin from "../src/component/FormIniciarSesion"
import { Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from "../src/routes/Routes";
import { useContext } from "react";
import { UserContext } from "../src/context/UserContext";



//Esta función toma un token como argumento, lo divide en sus partes (encabezado, carga útil y firma) y la decodifica en base64. Luego analiza y parsea la carga util para transformarla de un objeto json a un javascript
export function ParseToken(token) {
    try {
        if (token) {
          // Se toma la segunda parte del token JWT, que es la parte que contiene la información del usuario (carga útil).
          const base64Url = token.split('.')[1];
          //Corregimos los caracteres base64 que puedan no ser válidos.
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          //decodificamos la carga útil del token desde base64 a una cadena legible.
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join('')
          );
    
          //decodificamos la cadena y se analiza y se convierte a un objeto JavaScript
          const decodedObject = JSON.parse(jsonPayload);

          console.log('Parsed Token:', decodedObject);

          return decodedObject;
        } else {
          console.error('El token es nulo');
          return null; // Otra acción apropiada
        }
      } catch (error) {
        console.error('Error al analizar el token:', error);
        return null; // Otra acción apropiada
      }
};

//aca usamos una condicional si el token existe me lleva a un lado, si no a otro.
export default function LoginUser() {
  //le decimos q vamos a usar la data q vamos a obtener del login y accedemos al token 
  const { userLogeado } = useContext(UserContext);
  const tokenExist = userLogeado && userLogeado.accessToken;
    return (
      <Routes>
            <Route path="/" element={<FormLogin />} />
            <Route path="/app" element={tokenExist ? <AppRoutes /> : <Navigate to="/" />} />
        </Routes>
    )
}