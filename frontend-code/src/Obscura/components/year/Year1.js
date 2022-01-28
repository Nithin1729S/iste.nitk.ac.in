import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import QuestionWrapper from '../QuestionWrapper'
import { firstYear,numQuestions } from '../../constants/questions.js'

import Alphabet from '../games/alphabet'
class Year1 extends Component {
    state = {
        numberQuestionSolved: 0,
        //questions: [],
        questionScore: 0,
        gameScore: 0,
        showQuestion: false,
    }
    componentDidMount() {
        window.onbeforeunload = function() {
            return true;
        };  
        this.props.setFooterVal("obscura")
        //TODO : api requests to update the states
        // shuffles the questions from the list of first year question and select 2 from the shuffled list
        const shuffled = firstYear.sort(() => 0.5 - Math.random())
        this.setState({
            questions: shuffled.slice(0, numQuestions[0])
        })
    }
    updateQuestionSolved = () => {
        //upon a correct answer increase the number of correct questions
        // once the number of solved question equals 
        this.setState({
            numberQuestionSolved: this.state.numberQuestionSolved + 1,
        }, () => {
            console.log(this.state.numberQuestionSolved)
            if (this.state.numberQuestionSolved === numQuestions[0]) {
                // make an API request to update the score from the question
                window.alert('Score updated to the backend')
                window.alert(this.state.gameScore+this.state.questionScore)
                this.setState({
                    showQuestion: false
                })
            }
        })
    }
    changeScore = (val) => {
        //update score here
        // if the questions are visible : update the score for the question as 
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
        // TODO : update the game score here
        // TODO : make API request to update score on the backend
        // show some sort of congratulations or something
        // go back to dashboard 
        window.alert('Total Score: ' + this.state.gameScore)
        this.props.history.push('/obscura/dashboard')
        //history.go(0)
    }

    
    render() {
        const questionRender = (
            // the jsx to render the questions
            <>
                <h2>Question Score : { this.state.questionScore }</h2>
                <h3>Remaining Questions : { 2 - this.state.numberQuestionSolved }</h3>
                <QuestionWrapper
                    changeScore={ this.changeScore }
                    questions={ firstYear }
                    updateQuestionSolved={ this.updateQuestionSolved }
                />
            </>
        );
    
        const gameRender = (
            <Alphabet
                changeScore={ this.changeScore } 
                gameOver = {this.gameOver}
            />
        );
        // two components : Questions Component and Game Component
        return (
            <div>
                {/* Adding a go back to dashboard button */}
                {/* <h1>Welcome to Year 1</h1>
                <span><Link to="/obscura/dashboard"><button className="btn btn-primary bg-red">Go Back</button></Link></span> */}
                {/* <h2>Overall Score: {this.state.questionScore+this.state.gameScore}</h2> */}
                { this.state.showQuestion ? questionRender : gameRender}
            </div>
        )
    }
}

export default withRouter(Year1);
