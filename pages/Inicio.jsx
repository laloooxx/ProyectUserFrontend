import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import Footer from './Footer';
import ItemWithoutThumbnailsDemo from '../src/component/Carrusel';
import { useUserContext } from '../src/context/UserContext';
import ScrollToTop from '../src/component/BarraNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 64,
  },
}));

export default function InicioApp() {
  const classes = useStyles();
  const [mostrarCarrusel, setMostrarCarrusel] = useState(true);
  const { toggleFooterVisibility } = useUserContext();

  useEffect(() => {
      toggleFooterVisibility(); // Mostrar el footer cuando el componente se monta
      return () => {
          toggleFooterVisibility(); // Ocultar el footer cuando el componente se desmonta
      };
  }, [toggleFooterVisibility]);

  const handleMostrarCarrusel = (mostrar) => {
      setMostrarCarrusel(mostrar);
  };

  return (
      <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Menu mostrarCarrusel={mostrarCarrusel} onMostrarCarrusel={handleMostrarCarrusel} />
              </Grid>
              <Grid item xs={12}>
                  {mostrarCarrusel && <ItemWithoutThumbnailsDemo />}
              </Grid>
              <Grid item xs={12}>
                  <Footer />
              </Grid>
          </Grid>
      </div>
  );
}

