import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useUserContext } from '../context/UserContext';
import { usePostContext } from '../context/PostsContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function CardPublicaciones() {
  const classes = useStyles();

  const { userLogeado } = useUserContext();
  const {posts, setPosts, loading,} = usePostContext();

return (
    <div>
      {loading ? (
        <div>Cargando publicaciones...</div>
      ) : (
        <div>
            {console.log("Longitud de posts:", posts.length)}
          {posts.length > 0 ? (
            posts.map((post) => (
                <Card key={post.id} className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <PostAddIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.id}
                  subheader={post.fecha}
                />
                <CardMedia
                  className={classes.media}
                  image={post.imagen}
                  title={post.id}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.descripcion}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))
          ) : (
            <div>No hay publicaciones disponibles.</div>
          )}
        </div>
      )}
    </div>
  );
}