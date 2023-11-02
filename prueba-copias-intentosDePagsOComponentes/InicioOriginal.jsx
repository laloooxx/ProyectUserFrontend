import SimpleCard from '../src/component/Card';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserContextProvider from '../src/context/UserContext';
import Button from '@material-ui/core/Button';
import UserForm from '../src/component/UserForm';
import { Route, Routes, Link } from 'react-router-dom';
import UserTable from '../src/component/UserTable';
import UserUpdateForm from '../src/component/UserUpdateForm';
import UserDelete from '../src/component/UserDelete'
import { useEffect, useState } from 'react';


/**
 * Usamos un inline style para dar estilos 
 */
const styles = makeStyles({
    cardContainer: {
      display: 'flex'
    }
  });
  
  /**
   * Creamos la funcion de Inicio q va a ser la principal de la app, va a tener 2 tarjetas de materialUi.
   */
  export default function Inicio() {
    //aca guardamos el estilo en una variable para usar
    const classes = styles();
    const [usuariosVisible, setUsuariosVisible] = useState(true);
    const [crearUsuariosVisible, setCrearUsuariosVisible] = useState(true);

    
    useEffect(() => {
      if (!crearUsuariosVisible){
        setCrearUsuariosVisible(false);
      }
    }, [crearUsuariosVisible]);

    useEffect(() => {
      if (!usuariosVisible){
        setUsuariosVisible(false);
      }
    }, [usuariosVisible])

    return (
      /**
       * Creamos las rutas con react-router-dom 
       * Asignamos un container para mis tarjetas, y creamos las tarjetas con sus nombres y funcionalidades de los botones
       */
      <UserContextProvider> 

        <Routes>
          <Route path='/CrearUsuario' element = {<UserForm />} />
          <Route path='/Usuarios' element = {<UserTable />} />
          <Route path='/actualizarUsuario/:id'element= {<UserUpdateForm />} />
          <Route path='/eliminarUsuario/:id'element= {<UserDelete />} />
        </Routes>
          
          <Container className={classes.cardContainer} maxWidth="md">
            {crearUsuariosVisible && (
              <SimpleCard
                name="Crear usuarios"
                button={
                  <Link to="/CrearUsuario">
                    <Button variant="contained" color="primary">
                      Aceptar
                    </Button>
                  </Link>
                }
              />
            )}
            {usuariosVisible && (
              <SimpleCard
                name="Usuarios"
                button={
                  <Link to="/Usuarios">
                    <Button variant="contained" color="primary">
                      Aceptar
                    </Button>
                  </Link>}
              />
            )}
          </Container>
      </UserContextProvider>
    );
  }