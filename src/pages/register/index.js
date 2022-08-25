import React, { useState, useEffect } from "react";
import { auth, registerWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import {
  Container,
  StyledRegister,
  H1,
  Form,
  P,
  Input,
  Button,
} from "./register-style";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === "register") {
      await registerWithEmailAndPassword(
        register.name,
        register.email,
        register.password
      );
      swal("Congratulations!", "Registration success!", "success");
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, navigate, error]);

  return (
    <Container>
      <StyledRegister>
        <H1>Sign Up</H1>
        <Form action="" method="">
          <P>Nama</P>
          <Input
            type="text"
            name="name"
            placeholder="Input your name"
            value={register.name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
          <br />
          <P>Email</P>
          <Input
            type="text"
            name="email"
            placeholder="Input your email"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <br />
          <P>Password</P>
          <Input
            type="password"
            name="pass"
            placeholder="Input your password"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <br />
          <Button onClick={(e) => handleSubmit(e, "register")}>Sign Up</Button>
        </Form>
      </StyledRegister>
    </Container>
  );
};
export default Register;
