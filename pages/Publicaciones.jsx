import React from 'react';
import CardPublicaciones from '../src/component/CardPosts';
import { makeStyles } from '@material-ui/core/styles';
// Otro código necesario para tu página, como estilos, encabezados, etc.

// Renderiza tu componente CardPublicaciones dentro del componente de tu página
const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: 'calc(100vh - 64px)', //establece la altura máxima del componente a la altura de la ventana (100vh) menos el tamaño de tu barra de navegación (64px). Ajusta el valor 64px según el tamaño real de tu barra de navegación.
      overflowY: 'auto', //permite el desplazamiento vertical si el contenido excede la altura máxima.
      padding: theme.spacing(2), //agrega un relleno alrededor del contenido para mejorar la apariencia y la legibilidad.
    },
  }));
  

  function PagesPosts() {
        const classes = useStyles();

      return (
          <div className={classes.root}>
      <h1>Publicaciones</h1>
      <CardPublicaciones />
    </div>
  );
}

export default PagesPosts;
