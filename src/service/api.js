//importamos axios
import axios from "axios";

//creamos variables para almacenar los valores de nuestra bd
const API_URL_Users = 'http://localhost:3000/api/users';
const API_URL_POST = 'http://localhost:3000/api/publicaciones'


//creamos la funcion para mostrar usuarios
export async function getUsers() {
    //mostramos los datos de nuestra api con un get con fetch
    const resp = await fetch(API_URL_Users);
    return resp.json();
};


export async function getUserById(userId) {
    const url = `${API_URL_Users}/${userId}`;
    try {
        const response = await axios.get(url);
        const userData = response.data;
        userData.username = userData.username || '';
        return userData;
    } catch (error) {
        console.log('error al hacer la peticion', error)
    }
}


//creamos la funcion para crear usuarios
export async function createUser({username, password, email}) {

    //llamamos al metodo post de nuestra API con axios
    axios.post('http://localhost:3000/api/users', { username, password, email })


    // LA PARTE Q NO ANDA!!!!


    // const resp = await axios(API_URL, {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // });

    return
};


/**
 * creamos la funcion para actualizar usuarios, pidiendo como parametros el userId y los valores necesarios
 * @param {Int} userId El id q traemos de la tabla usuarios del front y cuando clikeamos en el boton actualizar
 * @param {string} param1 Nombre de usuario
 * @param {string} param2 La contraseña del usuario
 * @param {string} param3 El email del usuario
 */
export async function updateUser(userId, {username,password, email}) {
    //creamos una constante con la url y el id q traemos para hacer la peticion axios
    const url = `http://localhost:3000/api/users/${userId}`;
    await axios.put(url, {username: username,password: password, email: email})
};


export async function deleteUser(userId) {
    const url = `http://localhost:3000/api/users/${userId}`;
    await axios.delete(url, userId);
};


// export async function getPost() {
//     const resp = await fetch(API_URL_POST);
//     return resp.json();
// };