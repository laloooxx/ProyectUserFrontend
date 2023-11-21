import { useContext, useState } from "react";
import { UserContext, useUserContext } from "../context/UserContext";
import { motion } from 'framer-motion';


function UserProfile() {
    const { userLogeado, loading } = useUserContext();

    console.log("userLogeado:", userLogeado);
    if (loading) {
        return <div>Cargando...</div>
    }

    if (!userLogeado) {
        return <div>No se encontraron datos del usuario</div>
    }

    //Añadimos una verificacion antes de usar el substring paraa asegurar que solo intentamos acceder a substring si userData.accessToken está definido


    const profileStyles = {
        container: {
           backgroundColor: 'blueviolet',
           padding: '20px',
           borderRadius: '10px',
           boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
           color: 'blueviolet'
        },
        header: {
           textAlign: 'center',
           marginBottom: '20px',
           backgroundColor: 'blueviolet',
           color: 'blueviolet'
        },
        icon: {
           fontSize: '4rem',
           color: 'blueviolet',
           paddingLeft: '50px',
        },
     };

     const profileContainerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
     };

    return (
        <motion.div 
        initial= "hidden"
        animate= "visible"
        variants={profileContainerVariants}
        className="container"
        > 
            <div className={profileStyles.container}>
                <header className={profileStyles.header}>
                    <h3>
                    <strong>Bienvenido al perfil de usuario {userLogeado.username}</strong>
                    <i className="pi pi-user" style={profileStyles.icon}></i>
                    </h3>
                </header>
                <p>
                    <strong>Id:</strong> {userLogeado.id}
                </p>
                <p>
                    <strong>Email:</strong> {userLogeado.email}
                </p>
            </div>
        </motion.div>
    );
}

export default UserProfile;