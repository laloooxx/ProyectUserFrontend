import axios from "axios";

const API_URL_PUBLICACIONES = 'http://localhost:3000/publicaciones'



export async function getPublicaciones() {
    const url = API_URL_PUBLICACIONES;
    try {
        const response = await axios.get(url);
        console.log(response); // Imprime la respuesta completa en la consola
        const publicaciones=  response.data.publicaciones;
        return publicaciones;
    } catch (error) {
        console.error("Error al obtener publicaciones:", error);
        throw error;
    }
};


export async function getPublicacionesById(id) {
    const url = `${API_URL_PUBLICACIONES}/${id}`;
    try {
        const response = await axios.get(url);
        const dataPost = response.data;

        return dataPost;
    } catch (error) {
        console.error(error);
    }
};


export async function createPublicacion({ fecha, descripcion, ubicacion, horas, imagen}) {
    const url = API_URL_PUBLICACIONES;
    const response = await axios.post(url, { fecha, descripcion, ubicacion, horas, imagen });
    return response.data;
};


export async function updatePublicacion({ id, postData }) {
    const url = `${API_URL_PUBLICACIONES}/${id}`;
    const response = await axios.put(url, postData);
    return response.data;
};

export async function deletePublicacion( id ) {
    const url = `${API_URL_PUBLICACIONES}/${id}`;
    const response = await axios.delete(url, id);
    return response.data;
}