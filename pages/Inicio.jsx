import { Container } from '@material-ui/core';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import Footer from './Footer';
import CarruselMessi from '../src/component/Carrusel';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Menu />
        </Grid>
        <Grid item xs={6}>
          <Grid />
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
