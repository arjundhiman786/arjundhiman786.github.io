import { Button, Container, Divider, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Container>
        <li>
          <a href="/">Home</a>
        </li>
        <Typography variant="h4">Dashboard</Typography>
        <Divider />
        <Grid container>
          <Grid item xs>
            <Button
              href="/new_post"
              variant="outlined"
              color="primary"
              style={{ marginTop: 10 }}
            >
              Add new blog post
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: 10 }}
            >
              Add new porject to list
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 30 }}>
          <Grid item xs>
            <Typography variant="h5">Existing blog posts</Typography>
            <Divider />
            <ul>
              <li>a</li>
            </ul>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">Projects</Typography>
            <Divider />
            <ul>
              <li>a</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
