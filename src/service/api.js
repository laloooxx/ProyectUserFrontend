//importamos axios
import axios from "axios";

//creamos variables para almacenar los valores de nuestra bd
const API_URL_Users = 'http://localhost:3000/api/users';

//creamos la funcion para mostrar usuarios
export async function getUsers() {
    try {
        const response = await axios.get(API_URL_Users);
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


export async function getUserById({userId}) {
    const url = `${API_URL_Users}/${userId}`;
    try {
        const response = await axios.get(url);
        const userData = response.data;

        console.log('Datos del usuario:', userData);
        return userData;
    } catch (error) {
        console.log('error al hacer la peticion', error)
        throw error;
    }
}


//creamos la funcion para crear usuarios
export async function createUser({username, password, email}) {

    //llamamos al metodo post de nuestra API con axios
    await axios.post('http://localhost:3000/api/users', { username, password, email })

    return
};


/**
 * creamos la funcion para actualizar usuarios, pidiendo como parametros el userId y los valores necesarios
 */
export async function updateUser(userId, userData) {
    const url = `http://localhost:3000/api/users/${userId}`;
    await axios.put(url, userData);
  }
  

export async function deleteUser(userId) {
    const url = `http://localhost:3000/api/users/${userId}`;
    await axios.delete(url, userId);
};




//creamos la funcion para verificar usuarios en mi backend
export async function verifyUser({ email, password }) {
    const url = `http://localhost:3000/api/login`;

    try {
        const response = await axios.post(url, { email, password });
        return response; // Retorna la respuesta completa
    } catch (error) {
        console.error('Error al verificar usuario:', error);
        throw error; // Lanza el error para que se maneje en el componente
    }
};
