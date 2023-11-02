import { updateUser } from "../service/api";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";


/**
 * Usamos un inline style para dar estilos 
 */
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function UserUpdateForm() {
  //Creamos una variable id q va a ser la q almacene cuando clikeemos en el boton Actualizar, q va a recibir el id del usuario seleccionado
    const { id } = useParams();

    //creamos los estados de los valores q vamos a recibir para poder actualziar
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { users, setUsers } = useContext(UserContext);

    //creamos una funcion asyncrona para cuando usemos el formulario 
    const handleSubmit = async (Event) => {

        const data = {
            username,
            password,
            email,
        };

        await updateUser(id ,data);
        setUsers(prev => [...prev, data])
    };


    const classes = useStyles();

  //creamos un formulario de actulizacion, con materialUi, pasandole los valores y pidiendo q haga los respectivos cambios cuando llenamos el formulario
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
            required id="standard-required"
            label="Nombre de usuario"
            value={username}
            onChange={(Event) => setUsername(Event.target.value)} />
            <br />
        <TextField
          id="standard-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(Event) => setPassword(Event.target.value)}
        />
        <br />
        <TextField 
        id="standard-email"
        label="Correo electronico"
        type="string"
        value={email}
        onChange={(Event) => setEmail(Event.target.value)}
        />
        <br />
        <br />
        <Button
        variant="contained"
        color="primary"
        type="submit">
            Enviar
        </Button>
      </div>
    </form>
    );
};