import React, { useState, useEffect } from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import listOfProjects from "../json/listOfProjects1.json";
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
  const [projects, setProjects] = useState(<>No projects</>);
  useEffect(() => {
    var projectSize = listOfProjects.projects.length;
    let multipleOfThree = projectSize % 3 === 0;
    let projects = listOfProjects.projects;

    var finalResult = [];
    //Case #1 - only 1 project listing
    if (projectSize === 1) {
      finalResult.push(
        <Grid container className={classes.grid}>
          <Grid item xs>
            <ProjectCard
              title={projects[0].title}
              description={projects[0].description}
            />
          </Grid>
        </Grid>
      );
    } else {
      //Case #2 - greater than one, not multiple of 3 project listings size
      //Case #3 - greater than one, and a multiple of 3 project listings size
      console.log(multipleOfThree);
      var project_cards = [];
      switch (multipleOfThree) {
        case true:
          for (var i = 1; i <= projectSize; i++) {
            project_cards.push(<>ok</>);
          }
          break;

        case false:
          var rs = [];
          //if size is even, less than three
          if (projectSize % 2 === 0 && projectSize <= 3) {
            console.log("small");
          } else {
            var test = [];
            var subarray = [];
            for (var x = 1; x <= projectSize; x++) {
              project_cards.push(
                <Grid item xs style={{ marginTop: 20 }}>
                  <ProjectCard title="test" description="test"></ProjectCard>
                </Grid>
              );

              subarray.push(x);

              if (x % 3 === 0) {
                console.log(project_cards);
                rs.push(<Grid container spacing={3}>{project_cards}</Grid>);
                project_cards = [];
                test.push(subarray);
                subarray = [];
              }
            }
            console.log(test);
          }
          finalResult.push(rs);
          break;

        default:
          setProjects(<></>);
          break;
      }
    }
    setProjects(finalResult);
  }, [classes]);

  return (
    <>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        Projects
      </Typography>
      <Divider />
      {projects}
    </>
  );
}
export default Projects;
