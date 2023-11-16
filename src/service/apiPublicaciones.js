import axios from "axios";

const API_URL_PUBLICACIONES = 'http://localhost:3000/api/publicaciones'



export async function getPublicaciones() {
    const url = API_URL_PUBLICACIONES;
    await axios.get(url);
};


export async function getPublicacionesById(postId) {
    const url = `${API_URL_PUBLICACIONES}/${postId}`;
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


export async function updatePublicacion({ postId, postData }) {
    const url = `${API_URL_PUBLICACIONES}/${postId}`;
    await axios.put(url, postData);
};

export async function deletePublicacion( postId ) {
    const url = `${API_URL_PUBLICACIONES}/${postId}`;
    await axios.delete(url, postId);
}