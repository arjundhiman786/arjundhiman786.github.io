import {
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [pass, setPassword] = React.useState("");

  const doLogin = () => {
    const data = {
      email,
      pass,
    };
    console.log(data);
    history.push("/dashboard");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography variant="h4" align="center" style={{ marginTop: 50 }}>
            Sign In?
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid container>
              <Grid item>
                <Link href="/forgot_password" variant="body2">
                  Forgot password
                </Link>
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              value="sign in"
              color="primary"
              className={classes.submit}
              fullWidth
              onClick={() => doLogin()}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
