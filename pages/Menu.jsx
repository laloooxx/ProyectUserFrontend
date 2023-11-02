import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, useNavigate } from 'react-router-dom';
import AppRoutes from '../src/routes/Routes';

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
  },
}));


function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }


export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab
            label="Inicio"
            onClick={() => navigate('/inicio-carrusel')}
            {...a11yProps(0)}
          />
          <Tab
            label="Lista de Usuarios"
            onClick={() => navigate('/usuarios')}
            {...a11yProps(1)}
          />
          <Tab
            label="Crear Usuario"
            onClick={() => navigate('/crear-usuario')}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AppRoutes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AppRoutes />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <AppRoutes />
      </TabPanel>
    </div>
  );
}