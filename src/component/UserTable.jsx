import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import useUsers from "../hooks/useUsers";

export default function UserTable() {
  //usamos el get del servicio y lo guardamos en "lista"
    const lista = useUsers();
    console.log(lista);
    const users = lista.users

    if (lista.length === 0){
        return (
        <h1>Cargando usuarios</h1>
        )
    }else{
    return (

      //aca creamos una tabla para mostrar los usuarios
      <table>
         <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}