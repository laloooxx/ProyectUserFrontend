import { Navigate, Outlet } from "react-router-dom";
import { UserContext, useUserContext } from "../context/UserContext";


export const ProtectedRoute = (children) => {
    //va a tener q verificar la informacion del usuario
    const {LoginUser} = useUserContext();

        if (!LoginUser) {
            return <Navigate to="/" replace /> 
        }

        return children ? children : <Outlet />;
}