import { Divider, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Divider />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4" style={{ marginTop: 30 }}>
                Projects
              </Typography>
              <Divider />
              <br />
              <ol>
                <li>
                  <a href="/cheatsheets">Cheatsheets</a>
                </li>
              </ol>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4" style={{ marginTop: 30 }}>
                Blog Posts
              </Typography>
              <Divider />
              {/* <ul>
                <li>a</li>
              </ul> */}
              <br />
              Coming soon...
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
