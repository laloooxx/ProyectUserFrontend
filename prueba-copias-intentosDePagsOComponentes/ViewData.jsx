import React, {useState, useEffect} from 'react';
import axios from 'axios';


export const Lista = () => {
        const [lista, setLista] = useState([{
            id:0,
            usernames:'',
            passwords:'',
            email:'',
            uuid: 0
        }]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
        .then((resp) => {
            console.log('Respuesta exitosa:', resp.data.users);
            setLista(resp.data.users);
            console.log(lista)
        })
        .catch((err) => {
            console.error('Error al obtener los datos:', err);
            alert('Error al obtener los datos, aguante messi')
        })
    }, []);

    const handleSubmit = async (data) => {
        await createUser(data);
        setUsers(prev => [...prev, data])
    };
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre de usuario</label>
            <input type="text" value={username} onChange={(Event) => setUsername(Event.target.value)}/>
            <br />
            <br />
            <br />
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password" id="password" value={password} onChange={(Event) => setPassword(Event.target.value)} />
            <br />
            <br />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(Event) => setEmail(Event.target.value)} />
            <br />
            <br />
            <button type="submit"> Envias</button>
        </form>        
        <h1>Lista de usuarios</h1>
        <ul>
            {lista.map((usuario) => (
                <li key={usuario.id}>{usuario.username}</li>
            ))}
        </ul>
        
        </>
    )
};
