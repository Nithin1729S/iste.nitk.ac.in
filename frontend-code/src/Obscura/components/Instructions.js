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
              <h1>Instructions</h1>
              <ul>
                <li style={{ listStyleType: 'disc' }}>Each year has a set of questions followed by a mini-game</li>
                <li style={{ listStyleType: 'disc' }}>Solve questions and play games to win points to earn a place on the <Link to='/obscura/leaderboard'>leaderboard</Link></li>
                <li style={{ listStyleType: 'disc' }}>The scoring rules are as follows:
                  <ul style={{paddingLeft : '20px' }}>
                    <li style={{ listStyleType: 'disc' }}>Each questions is a multiple choice question and a correct answer earns you <strong>200 points</strong> </li>
                    <li style={{ listStyleType: 'disc' }}>Be careful! Choosing a wrong option penalizes 50 points from the 200 for that question (upto a maximum of 2 such attempts)</li>
                    <li style={{ listStyleType: 'disc' }}>You are allowed to skip a question but at a penalty of 100 points from the total score for that attempt</li>
                  </ul>
                </li>
                <li style={ { listStyleType: 'disc' } }>Games can be played only after getting 50% of the total possible score from the questions </li>
                <li style={{ listStyleType: 'disc' }}>You are allowed re-attempts for a year at a penalty of -5</li>
                <li style={{ listStyleType: 'disc' }}>Solving 100% of the questions allows you to play the game directly and without a penalty</li>
              </ul>
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
  padding :5px;
  padding-left : 40px;
  margin: 0px 16px;
  background-color: #262626;
  border-radius: 8px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  h1,h2,li,ul {
    color: #ffeaea;
  }
`;

export default Instructions;
