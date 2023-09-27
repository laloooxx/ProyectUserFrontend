import axios from "axios";


const API_URL = 'http://localhost:3000/api/users';

export async function getUsers() {
    //mostramos los datos de nuestra api con un get con fetch
    const resp = await fetch(API_URL);
    return resp.json();
};


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