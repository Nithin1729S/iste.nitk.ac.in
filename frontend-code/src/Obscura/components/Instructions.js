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
            <Container>
              <h1>Instructions</h1>
              <ul>
                <li style={{ listStyleType: 'disc' }}>Each year has a set of questions followed by a mini-game</li>
                <li style={{ listStyleType: 'disc' }}>Solve questions and play games to win points to earn a place on the <Link to='/obscura/leaderboard'>leaderboard</Link></li>
                <li style={{ listStyleType: 'disc' }}>The scoring rules are as follows:
                  <ul style={{paddingLeft : '20px' }}>
                    <li style={{ listStyleType: 'disc' }}>Each questions is a multiple choice question and a correct answer earns you <strong>200 points</strong> </li>
                    <li style={{ listStyleType: 'disc' }}>Be careful! Choosing a wrong option penalizes 50 points from the 200 </li>
                    <li style={{ listStyleType: 'disc' }}>You are allowed to skip a question but at a penalty of 100 points from the total score for that attempt</li>
                  </ul>
                </li>
                <li style={ { listStyleType: 'disc' } }>Games can be played only after getting atleast 50% of the total possible score from the questions </li>
                <li style={{ listStyleType: 'disc' }}>You are allowed to reattempt the questions for a year at a penalty of -5</li>
                <li style={ { listStyleType: 'disc' } }>Once you have solved 100% of the question for the year, you are allowed direct access to the game without penalty</li>
                <li style={ { listStyleType: 'disc' } }>
                IMPORTANT : Your progress for the year is LOST if you <Warning>refresh or go back to the dashboard</Warning>. mid year<br/>
                Scores are saved ONLY after clicking the <Warning>Go to dashboard</Warning> after finishing the game
                </li>

              </ul>
            </Container>
        </LoginContainer>
    );
};
const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${obscurabannerv2});
  background-size: cover;
  /* overflow-x: hidden; */
  margin-top: -64px;
  background-size: cover;
  padding : 100px;
`;

const Container = styled.div`
width: 100%;
max-width: 800px;
height : 100%;
background-color: #262626;
padding: 40px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: 16px;
box-shadow: 9px 4px 32px 0px #000000b3;
color: white;
margin: 0px 12px;

button{
padding: 12px 32px;
width: 60%;
font-size: 24px;
border: none;
border-radius:8px;
margin: 16px 0px;
cursor: pointer;
background-color: #13a388;
color: white;
}
li{
  font-size: 24px;
}
`;
const Warning = styled.strong`
  color : red !important;
`;



export default Instructions;
