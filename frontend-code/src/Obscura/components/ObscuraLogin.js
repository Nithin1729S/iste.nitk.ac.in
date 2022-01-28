// code starts
import styled from "styled-components";
import { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  let history = useHistory();

  const handleLoginClick = () => {
    if (username.length < 3) {
      setUsernameError("Invalid username");
    } else {
      setUsernameError("");
    }
    if (password.length < 3) {
      setErrorPassword("Enter valid password");
    } else {
      setErrorPassword("");
    }
    if (password.length < 3 && username.length < 3) {
      return;
    } else {
      history.push('/obscura/dashboard')
      // axios
      //   .post("/user/login", {
      //     email: username,
      //     password: password,
      //   })
      //   .then((res) => {
      //     if (res.data.success) {
      //       localStorage.setItem("username", username);
      //     } else {
      //       console.log(res.data);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  return (
    <LoginContainer>
      <StyledLogin>
        <h2>Login</h2>
        <StyledInputDiv usernameError={usernameError}>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </StyledInputDiv>
        <StyledInputDiv errorPassword={errorPassword}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledInputDiv>
        <button onClick={handleLoginClick}>Login</button>

        {/* if you want to show message */}
        {/* <br />
        {emailError.length > 0 && (
          <span
            style={{
              color: "red",
              fontSize: "16px",
            }}
          >
            {emailError}
          </span>
        )}
        <br />
        {errorPassword.length > 0 && (
          <span
            style={{
              color: "red",
              fontSize: "16px",
            }}
          >
            {errorPassword}
          </span>
        )} */}
      </StyledLogin>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLogin = styled.div`
  max-width: 450px;
  height: 80%;
  width: 100%;
  padding: 64px;
  margin: 0px 16px;
  background-color: #262626;
  border-radius: 8px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  h2 {
    font-size: 26px;
    color: #ffeaea;
  }
  button {
    width: 100%;
    padding: 12px;
    margin-top: 40px;
    margin-bottom: 12px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 4px;
    color: #ffeaea;
    background-color: #13a388;
    cursor: pointer;
  }
`;
const StyledInputDiv = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
  label {
    margin-top: 32px;
    margin-bottom: 4px;
    font-size: 20px;
    color: #fff;
  }
  input {
    padding: 16px 12px 4px;
    width: 100%;
    /* border-radius: 4px; */
    border: none;
    outline: none;
    font-size: 20px;
    background: none;
    border-bottom: 2px solid #ffeaea;
    border-radius: 4px 4px 0px 0px;
    color: #fff;
  }
  input[type="text"] {
    border-bottom: ${(props) =>
      props.usernameError?.length > 0 && "2px solid red"};
    color: ${(props) => props.usernameError?.length > 0 && "red"};
    background-color: ${(props) =>
      props.usernameError?.length > 0 && "#ff84843b"};
  }
  input[type="password"] {
    border-bottom: ${(props) =>
      props.errorPassword?.length > 0 && "2px solid red"};
    color: ${(props) => props.errorPassword?.length > 0 && "red"};
    background-color: ${(props) =>
      props.errorPassword?.length > 0 && "#ff84843b"};
  }
  label[for="username"] {
    color: ${(props) => props.usernameError?.length > 0 && "red"};
  }
  label[for="password"] {
    color: ${(props) => props.errorPassword?.length > 0 && "red"};
  }
`;

export default Login;
