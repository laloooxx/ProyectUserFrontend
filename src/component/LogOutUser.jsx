import { Button } from "primereact/button";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


function LogOutUser() {
    const { logoutUser } = useUserContext();
    const navigate = useNavigate()

    const handleLogOut =() => {
        logoutUser();

        navigate('/')
    }


    return (
        <div className="botonsito">
            <Button label="Cerrar sesion" onClick={handleLogOut}/>
        </div>
    )
};

export default LogOutUser;