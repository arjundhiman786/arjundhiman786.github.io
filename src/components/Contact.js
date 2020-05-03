import React from "react";
import { Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import InstagramIcon from "@material-ui/icons/Instagram";

function Contact() {
  return (
    <>
      <Grid style={{ marginTop: 20 }}>
        <Grid item xs>
          <a href="https://github.com/arjundhiman786/">
            <GitHubIcon />
          </a>
          &nbsp;
          <a href="https://ca.linkedin.com/in/arjundhiman">
            <LinkedInIcon />
          </a>
          &nbsp;
          <a href="mailto:arjund38@gmail.com">
            <EmailIcon />
          </a>
          &nbsp;
          <a href="resume.pdf">
            <DescriptionIcon />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/dhimanarjun/">
            <InstagramIcon />
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
