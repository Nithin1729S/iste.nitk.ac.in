import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import QuestionWrapper from '../QuestionWrapper'
import { thirdYear, numQuestions,maxGameScore } from '../../constants/questions.js'
import obscurabannerv2 from '../../constants/obscurabannerv2.png'
import { baseRequest } from '../../../constants'



// When users enters this page for the first time,
// he is shown the questions (showQuestion : true)
// if he is able to get >=50% of marks, he is determined passed (has_passed : false)
// failing to get 50% of the scores, he is sent to the failed attempt screen where he is sent back to the dashboard

//import game here
class Year3 extends Component {
    state = {
        questions : [],
        numberQuestionSolved: 0,
        has_passed: 0,
        questionScore: 0,
        gameScore: 0,
        showQuestion: true,
        numberQuestionAttempted: 0,
        attemptNumber: 0,
        penaltyAttempt : false,
    }

    componentDidMount() { 
        this.props.setFooterVal("obscura")
        //TODO : make a GET request and set values for showQuestions and the attempt penalty
        const { username, yearPassed } = JSON.parse(localStorage.getItem("userInfo"))
        if (yearPassed < 2) {
            this.props.history.push('/obscura/dashboard')
        }
        const shuffled = thirdYear.sort(() => 0.5 - Math.random())
        
        baseRequest.get('/obscura/user/year/3', {
            params : { username : username }
        })
            .then(res => {
                const { numQuestionsSolved, numAttempts,questionScore } = res.data
                const doesQuestionShow = !(numQuestionsSolved === numQuestions[2]); 
                this.setState({
                    showQuestion: doesQuestionShow,
                    penaltyAttempt : doesQuestionShow,
                    questionScore: doesQuestionShow ? 0 : questionScore,
                    attemptNumber: numAttempts,
                    has_passed: yearPassed >= 1,
                    questions: shuffled.slice(0, numQuestions[2]),
                    numberQuestionSolved : doesQuestionShow ? 0 : numQuestionsSolved
                })
        })
    }

    updateQuestionSolved = () => {
        this.updateQuestionAttempted()
        this.setState({
            numberQuestionSolved : this.state.numberQuestionSolved+1
        }, () => {
            if (this.state.questionScore >= 0.5*numQuestions[2]*200) {
                this.setState({
                    has_passed : 1
                })
            }
        })
    }
    updateQuestionAttempted = () => {
        this.setState({
            numberQuestionAttempted: this.state.numberQuestionAttempted + 1,
        }, () => {
            if (this.state.numberQuestionAttempted === numQuestions[2]) {
                this.setState({
                    showQuestion: false
                })
            }
        })
    }
    changeScore = (val) => {
        if (this.state.showQuestion) {
            this.setState({
                questionScore: this.state.questionScore + val
            })
        }
        else {
            this.setState({
                gameScore: val
            })
        }
    }
    gameOver = () => {
        const { username } = JSON.parse(localStorage.getItem("userInfo"));
        const penalty = this.state.penaltyAttempt ? 5*this.state.attemptNumber : 0;
        const finalScore = Math.min(maxGameScore[2], this.state.gameScore) + this.state.questionScore - penalty;
        baseRequest.post('/obscura/user/updatescore/3', {},
            {
                params:
                {
                    username: username,
                    score: finalScore,
                    has_passed: this.state.has_passed | 0,
                    numberQuestionSolved: this.state.numberQuestionSolved,
                    questionScore : this.state.questionScore,
                }
            })
            .then(response => {
                console.log(response)
                if (response.data.msg === "Score Updated") {
                    this.props.history.push('/obscura/dashboard')
                    window.location.reload();
                }
            })
            .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.state)
        const questionRender = (
            <Container>
                <QuestionInfo>
                    <h3>Question Score : { this.state.questionScore }</h3>
                    <h3>Remaining Questions : { numQuestions[2] - this.state.numberQuestionAttempted - 1 }</h3>
                </QuestionInfo>    
                <QuestionWrapper
                    changeScore={ this.changeScore }
                    questions={ this.state.questions }
                    updateQuestionAttempted={ this.updateQuestionAttempted }
                    updateQuestionSolved = {this.updateQuestionSolved }
                />
            </Container>
        );
    
        const gameRender = (
            // TODO : add the question score in the end game screen 
            <>
                <h1>PacMan goes here</h1>
                <button onClick={()=> this.gameOver()}>Go to Dashboard</button>
            </>    
        );


        if (this.state.showQuestion) {

            return (<>{ questionRender }</>);
        }
        else if(this.state.has_passed === false){
            return (
                <>
                    <Container>
                    <FinalResult>
                        <h1>Attempt Failed (Get 50% to pass)</h1>
                        <h2>Final Score : { this.state.questionScore }</h2>
                            <button onClick={ () => {
                                this.gameOver()
                        }}>Go to Dashboard</button>
                    </FinalResult></Container>
                </>
            );
        }
        else {
            return <>{ gameRender }</>
        }
    }
}

export default withRouter(Year3);

const Container = styled.div`
    padding : 100px;
    width: 100%;
    height: 100%;
    background-color: #2c2c2c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${obscurabannerv2});
    background-size: cover;
    overflow-x: hidden;
    margin-top: -64px;
    background-size: cover;
    h1,h2,h3{
        color: #fff !important;
    }
`;

const QuestionInfo = styled.div`
    display : flex;
    flex-direction: row;
    width:90%;
    justify-content: space-between;
    h1,h2,h3{
        color: #fff !important;
    }
`;

const FinalResult = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50vh;
  background-color: #262626;
  padding: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  color: white;
  font-size: 32px;
  margin: 0px 12px;
    button{
    padding: 12px 32px;
    width: 60%;
    font-size: 24px;
    border: none;
    border-radius:8px;
    margin: 16px 0px;
    cursor: pointer;
    color: white;
    background-color: #12a389;
    }
`
