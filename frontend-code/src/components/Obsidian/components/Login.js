// code starts
import { baseRequest } from '../../../constants';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setFooterVal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('obsidianUserInfo')) {
      history.push('/obsidian/1');
    }
    // change this to update footer style
    setFooterVal('obsidian');
    return () => {
      setFooterVal('obsidian');
    }
  }, []);

  const handleLoginClick = () => {
    if (username.length < 3) {
      setUsernameError('Invalid username');
    } else {
      setUsernameError('');
    }
    if (password.length < 3) {
      setErrorPassword('Enter valid password');
    } else {
      setErrorPassword('');
    }
    if (password.length < 3 && username.length < 3) {
      return;
    } else {
      const loginData = { username: username, password: password };
      localStorage.setItem('obsidianUserInfo', JSON.stringify(loginData));
      history.push('/obsidian/1');
      //TODO : set endpoints for Obsidian
      /*
      baseRequest.get('/obsidian/login/', { params: { username: username, password: password } })
        .then(response => {
          if (response.data.hasOwnProperty('isLogin')) {
            if (response.data.msg === "Password") {
                setErrorPassword(response.data.msg)
            }
            else {
              setUsernameError(response.data.msg)
            }
          }
          else {
            baseRequest.get('/obscura/user/', { params: { username: username } })
              .then(response => {
                localStorage.setItem('userInfo', JSON.stringify(response.data));
                history.push('/obscura/dashboard')
              })
          }
        })
        */
    }
  };
  return (
    <LoginContainer>
      <StyledLogin>
        <h1>Login</h1>
        <StyledInputDiv usernameError={ usernameError }>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
          />
        </StyledInputDiv>
        <StyledInputDiv errorPassword={ errorPassword }>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
        </StyledInputDiv>
        <button onClick={ handleLoginClick }>Login</button>

        {/* if you want to show message */ }
        <br />
        { usernameError.length > 0 && (
          <span
            style={ {
              color: 'red',
              fontSize: '16px',
            } }
          >
            { usernameError }
          </span>
        ) }
        <br />
        { errorPassword.length > 0 && (
          <span
            style={ {
              color: 'red',
              fontSize: '16px',
            } }
          >
            { errorPassword }
          </span>
        ) }
      </StyledLogin>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  padding: 20px 20px;
  height: 100%;
  /* background: rgb(63,94,251) ;
  background-image: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); */
  background: rgb(14,14,14);
  background: linear-gradient(171deg, rgba(14,14,14,1) 1%, rgba(12,12,12,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-top: -64px;
  background-size: cover;
`;
const StyledLogin = styled.div`
  max-width: 600px;
  height: 100%;
  width: 60%;
  padding: 0 5% 5%;
  margin: 100px;
  /* background-color : #101010; */
  border-radius: 5px;
  text-align: center;
  color: #999;
  border-width: 3px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      #f452c7, 
      #7111a1
    ) 1 100%;
  h1 {
    font-size: 5vw;
    color: #ffeaea;
    font-weight : bold;
  }
  button {
    width: 100%;
    padding: 12px;
    margin-top: 40px;
    margin-bottom: 12px;
    border: none;
    outline: none;
    font-size: 25px;
    font-weight:500;
    border-radius: 4px;
    color: #fff;
    background: rgb(177,32,249);
    background: linear-gradient(120deg, #f452c7 1%, #7111a1 100%);
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 0 5px #f452c7;
  }
  
`;
const StyledInputDiv = styled.div`
  margin: 5px 20px;
  display : flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-top: 32px;
    font-size: 20px;
    color: #6e6e6e;
  }
  input {
    padding: 5px 12px !important;
    width: 100%;
    border: none;
    outline: none;
    text-decoration : none;
    font-size: 18px;
    background: none;
    border-bottom: none !important;
    border-radius: 5px !important;
    color: #6e6e6e;
    background-color: #171717 !important;
  }
  input:focus {
    box-shadow: none !important;
  }  
  input[type='text'] {
    border: ${props =>
    props.usernameError?.length > 0 && '2px solid red'};
    color: ${props => props.usernameError?.length > 0 && 'red'};
    background-color: ${props =>
    props.usernameError?.length > 0 && '#ff84843b'};
  }
  input[type='password'] {
    border: ${props =>
    props.errorPassword?.length > 0 && '2px solid red'};
    color: ${props => props.errorPassword?.length > 0 && 'red'};
    background-color: ${props =>
    props.errorPassword?.length > 0 && '#ff84843b'};
  }
  label[for='username'] {
    color: ${props => props.usernameError?.length > 0 && 'red'};
  }
  label[for='password'] {
    color: ${props => props.errorPassword?.length > 0 && 'red'};
  }
`;

export default Login;
