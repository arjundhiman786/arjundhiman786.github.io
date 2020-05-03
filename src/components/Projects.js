import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  grid: {
    marginTop: 20,
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        Projects
      </Typography>
      <Divider />
      <Grid container className={classes.grid}>
        <Grid item xs>
          <ProjectCard title="test" description="Test" />
        </Grid>
      </Grid>
    </>
  );
}
export default Projects;
