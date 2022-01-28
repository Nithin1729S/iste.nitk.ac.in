import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import obscurabannerv2 from '../constants/obscurabannerv2.png'

const Instructions = ({ setFooterVal }) => {
    useEffect(() => {
        setFooterVal("obscura")
    })
    return (
        <LoginContainer>
            <StyledLogin>
                <h2>Instructions</h2>
            </StyledLogin>
        </LoginContainer>
    );
};
const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${obscurabannerv2});
  background-size: cover;
  overflow-x: hidden;
  margin-top: -64px;
  background-size: cover;
`;

const StyledLogin = styled.div`
  max-width: 550px;
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
`;

export default Instructions;
