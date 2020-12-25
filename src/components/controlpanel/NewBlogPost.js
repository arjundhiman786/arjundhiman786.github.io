import { Button, Container, Divider, Typography } from "@material-ui/core";
import React from "react";

export default function NewBlogPost() {
  return (
    <>
      <Container>
        <a href="/dashboard">Dashboard</a>
        <Typography variant="h3">New blog post</Typography>
        <Divider />
        <textarea style={{ width: "100%", height: 600 }} />
        <br />
        <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>
          Submit
        </Button>
      </Container>
    </>
  );
}
