import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, useNavigate } from 'react-router-dom';
import ItemWithoutThumbnailsDemo from '../src/component/Carrusel';
import UserTable from '../src/component/UserTable';
import UserProfile from '../src/component/UserProfile';
import LogOutUser from '../src/component/LogOutUser';
import PagesPosts from './Publicaciones';


function TabPanel(props) {  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
}));


function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }


//menu de material-ui
export default function Menu({ mostrarCarrusel, onMostrarCarrusel }) {
  const [currentPage, setCurrentPage] = useState('carrusel');

  const handleTabClick = (event, newValue) => {
    setCurrentPage(newValue);

    onMostrarCarrusel(newValue === 'carrusel');
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={currentPage}
          onChange={handleTabClick}
          aria-label="nav tabs example"
        >
          <Tab
            label="Inicio"
            value="carrusel"
          />
          <Tab
            label="Lista de Usuarios"
            value="usuarios"
          />
          <Tab
            label="Perfil de Usuario"
            value="perfil"
          />
          <Tab
            label="Publicaciones"
            value="publicaciones"
          />
          <Tab
            label="Cerrar sesión"
            value="cerrar sesion"
          />
        </Tabs>
      </AppBar>
      <TabPanel value={currentPage} index="carrusel">
        {/* Contenido opcional del carrusel si es necesario */}
      </TabPanel>
      <TabPanel value={currentPage} index="usuarios">
        <UserTable />
      </TabPanel>
      <TabPanel value={currentPage} index="perfil">
        <UserProfile />
      </TabPanel>
      <TabPanel value={currentPage} index="publicaciones">
        <PagesPosts />
      </TabPanel>
      <TabPanel value={currentPage} index="cerrar sesion">
        <LogOutUser />
      </TabPanel>
    </div>
  );
}