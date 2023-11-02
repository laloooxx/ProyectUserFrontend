import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';


/**
 * Usamos un inline style para dar estilos 
 */
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  smallButton: {
    padding: '4px 8px',
    minWidth: 'unset',
  }
}));

export default function UserTable() {

    const classes = useStyles();

    //creamos una variable para almacenar los usuarios traidos con el hook personalizado useUsers y preguntamos si esta vacia
    const lista = useUsers();
    console.log(lista);
    

    if (lista.length === 0){
      return <h1>Cargando usuarios</h1>;
    }

    const users = lista.users;

    return (

      //aca creamos una tabla para mostrar los usuarios, usando el LinkTo de react-router-dom, definimos las rutas de los botones q creamos
      //para eliminar y actualizar usuarios
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
              <td>
                <Link to={`/actualizarUsuario/${user.id}`}>
                  <Button
                    variant="contained"
                    color="default"
                    className={`${classes.smallButton} ${classes.button}`}
                    startIcon={<CloudUploadIcon />}
                    >
                    Actualizar
                  </Button>
                </Link>
              </td>
              <td>
                <Link to={`/eliminarUsuario/${user.id}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={`${classes.smallButton} ${classes.button}`}
                    startIcon={<DeleteIcon />}
                    >
                    Eliminar
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}