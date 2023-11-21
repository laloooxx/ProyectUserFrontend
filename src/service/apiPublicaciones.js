import axios from "axios";

const API_URL_PUBLICACIONES = 'http://localhost:3000/publicaciones'



export async function getPublicaciones() {
    const url = API_URL_PUBLICACIONES;
    await axios.get(url);
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


export async function createPublicacion({ fecha, descripcion, ubicacion, imagen}) {
    const url = API_URL_PUBLICACIONES;
    await axios.post(url, { fecha, descripcion, ubicacion, imagen });

    return
};


export async function updatePublicacion({ id, postData }) {
    const url = `${API_URL_PUBLICACIONES}/${id}`;
    await axios.put(url, postData);
};

export async function deletePublicacion( id ) {
    const url = `${API_URL_PUBLICACIONES}/${id}`;
    await axios.delete(url, id);
}