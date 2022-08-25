import React, { useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import {
  Container,
  StyledLogin,
  H1,
  Form,
  P,
  Input,
  Button,
} from "./login-style";
import swal from "sweetalert";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e, param) => {
    e.preventDefault();
    if (param === "login") {
      await logInWithEmailAndPassword(login.email, login.password);
      swal("Usccess!", "Sign In success!", "success");
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  return (
    <Container>
      <StyledLogin>
        <H1>Sign In</H1>
        <Form action="" method="">
          <P>Email</P>
          <Input
            type="text"
            name="email"
            placeholder="Input your email"
            value={login.email}
            onChange={(e) =>
              setLogin({
                ...login,
                email: e.target.value,
              })
            }
          />
          <br />
          <P>Password</P>
          <Input
            type="password"
            name="pass"
            placeholder="Input your password"
            value={login.password}
            onChange={(e) =>
              setLogin({
                ...login,
                password: e.target.value,
              })
            }
          />
          <br />
          <Button onClick={(e) => handleLogin(e, "login")}>Sign In</Button>
        </Form>
      </StyledLogin>
    </Container>
  );
};

export default Login;
