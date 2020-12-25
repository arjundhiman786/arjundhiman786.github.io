import React from "react";
import { Typography, Container, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import Contact from "./Contact";
import avtar from "./imgs/avtar.jpg";
import Projects from "./Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
function Home() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid directon="row" container spacing={3} style={{ marginTop: 10 }}>
          <Grid item xs />
          <Grid item xs={2}>
            <Avatar alt="Arjun Dhiman" src={avtar} className={classes.large} />
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs>
              <Typography variant="h2">
                Hello, I&apos;m Arjun
                <span role="img" aria-label="peace">
                  &#9996;
                </span>
              </Typography>
              <Typography variant="h5">
                I&apos;m a Software Engineer based in Toronto, ON
                <span role="img" aria-label="computer">
                  &#128187;
                </span>
                <br />
                <Typography variant="subtitle1">
                  Currently an Intermediate Software Developer at BMO
                </Typography>
              </Typography>
              <Contact />
            </Grid>
          </Grid>
        </Grid>
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
