import { useState } from "react";
import "./homeApp.css";
import styled from '@emotion/styled'
import axios from 'axios'



//el JSON.stringfy hace q podamos ver un objeto json en react

export function App(props) {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

 const Button = styled.button`
    padding: 10px;
    background-color: ${props => props.title == 'saludo' ? 'blue' : 'violet'};
    font-size: 15px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `
  
  
const handleSubmit =(event)=> {
    event.preventDefault();
    axios.post('http://localhost:3000/api/users', {username, password, email})
    .then((resp)=>{
        alert('Datos cargados correctamente')
        console.log(resp);
    })
    .catch((err)=>{
        alert('Error al subir los datos')
        console.error(err);
    });
  }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(Event) => setUsername(Event.target.value)}/>
            <br />
            <br />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(Event) => setPassword(Event.target.value)} />
            <br />
            <br />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(Event) => setEmail(Event.target.value)} />
            <br />
            <br />
            <button type="submit"> Envias</button>
            {/* <Button> Enviar</Button> */}
        </form>
        </>
    )
};
