import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  grid: {
    marginTop: 20,
  },
});

function ProjectCard(props) {
  const { title } = props;
  const { description } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://cdn.mos.cms.futurecdn.net/VZZRRfEZ5zCJKHod6sdyrg-1024-80.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default ProjectCard;
