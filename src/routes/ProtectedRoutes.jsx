import { Navigate, Outlet } from "react-router-dom";
import { UserContext, useUserContext } from "../context/UserContext";


export const ProtectedRoute = ({ children }) => {
    //va a tener q verificar la informacion del usuario
    const {userLogeado} = useUserContext();
    console.log(userLogeado);
        if (!userLogeado) {
            return <Navigate to="/" replace /> 
        }

        return children ? children : <Outlet />;
}