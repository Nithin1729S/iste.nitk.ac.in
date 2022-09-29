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
            baseRequest.get('/obscura/login/', { params: { username: username, password: password } })
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
                <h2>Login</h2>
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
  background-image: linear-gradient(30deg, #999, #300a24, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-top: -64px;
  background-size: cover;
`;
const StyledLogin = styled.div`
  max-width: 450px;
  height: 80%;
  width: 100%;
  padding: 64px;
  margin: 100px;
  background-image: radial-gradient(#222, #555);
  border-radius: 8px;
  text-align: center;
  color: #999;
  box-shadow: 9px 4px 32px 0px #000;
  h2 {
    font-size: 3vw;
    color: #ffeaea;
  }
  button {
    width: 100%;
    padding: 12px;
    margin-top: 40px;
    margin-bottom: 12px;
    border: none;
    outline: none;
    font-size: 30px;
    border-radius: 4px;
    color: #ffeaea;
    background-color: #301a43;
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
  input[type='text'] {
    border-bottom: ${props =>
        props.usernameError?.length > 0 && '2px solid red'};
    color: ${props => props.usernameError?.length > 0 && 'red'};
    background-color: ${props =>
        props.usernameError?.length > 0 && '#ff84843b'};
  }
  input[type='password'] {
    border-bottom: ${props =>
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
