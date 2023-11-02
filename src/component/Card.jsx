import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 40,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({props, name, button}) {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.cardContainer}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        {button}
      </CardActions>
    </Card>
    </Container>
  );
}
