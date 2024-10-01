//importamos axios
import axios from "axios";

//creamos variables para almacenar los valores de nuestra bd
const API_URL_Users = 'http://localhost:3000/users';

//creamos la funcion para mostrar usuarios
export async function getUsers() {
    try {

        const response = await axios.get(API_URL_Users,
            // headers: {
            //     'Authorization': ''
            // }
        );

        const data = response.data;
        
        if (Array.isArray(data.users)) {
            return data.users;
        } else {
            console.error("Los usuarios no son un array");
            return [];
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
}


export async function getUserById(id) {
    if (!id) {
        console.error('El id no está definido');
        return null;
    }

    const url = `${API_URL_Users}/${id}`;
    try {
        const response = await axios.get(url);
        const userData = response.data;

        if (userData.ok) {
            return userData.user;
        } else {
            console.log('Usuario no encontrado:', userData.message);
            return null
        }
        console.log('Datos del usuario:', userData);
    } catch (error) {
        console.log('error al hacer la peticion', error)
        throw error;
    }
}


//creamos la funcion para crear usuarios
export async function createUser({username, password, email}) {
    console.log('Iniciando createUser con:', { username, password, email });
    try {
        const response = await axios.post('http://localhost:3000/auth/register', { username, password, email });
        console.log('Respuesta de createUser desdde la api:', response);
        return response;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Error: La ruta no existe. Verifica la URL de la API.');
        } else {
            console.error('Error en createUser:', error.response ? error.response.data : error.message);
        }
    }
}


/**
 * creamos la funcion para actualizar usuarios, pidiendo como parametros el id y los valores necesarios
 */
export async function updateUser(id, userData) {
    const url = `http://localhost:3000/users/${id}`;
    await axios.put(url, userData);
  }
  

export async function deleteUser(id) {
    const url = `http://localhost:3000/users/${id}`;
    await axios.delete(url, id);
};




//creamos la funcion para verificar usuarios en mi backend
export async function verifyUser({ email, password }) {
    const url = `http://localhost:3000/auth/login`;

    try {
        const response = await axios.post(url, { email, password });
        return response; // Retorna la respuesta completa
    } catch (error) {
        console.error('Error al verificar usuario:', error);
        throw error; // Lanza el error para que se maneje en el componente
    }
};