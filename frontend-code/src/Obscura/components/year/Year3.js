import React, { Component } from 'react';
import QuestionWrapper from '../QuestionWrapper'
import { thirdYear, numQuestions } from '../../constants/questions.js'
import {Redirect} from 'react-router'

import {Link} from 'react-router-dom'
class Year1 extends Component {
    state = {
        numberQuestionSolved: 0,
        //questions: [],
        questionScore: 0,
        gameScore : 0,
        showQuestion: true,
        redirect: true //update this state by checking value from localstorage 
                        // if user has passed year 3 or above : set to false
    }
    componentDidMount() {
        //TODO : api requests to update the states
            
        // shuffles the questions from the list of first year question and select 2 from the shuffled list
        const shuffled = thirdYear.sort(() => 0.5 - Math.random())
        this.setState({
            questions : shuffled.slice(0,numQuestions[2])
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
                this.setState({
                    showQuestion : false
                })
            }
        })
    }
    changeScore=(val)=>{
        //update score here
        // if the questions are visible : update the score for the question as 
        if (this.state.showQuestion) {
            this.setState({
                questionScore: this.state.questionScore + val
            })
        }
        else {
            this.setState({
                gameScore: this.state.gameScore + val
            })
        }
    }

    gameOver = (val) => {
        // TODO : update the game score here
        // TODO : make API request to update score on the backend
        // show some sort of congratulations or something
        // go back to dashboard 
    }

    questionRender = (
        // the jsx to render the questions
        <>
            <h2>Question Score : {this.state.questionScore}</h2>
            <h3>Remaining Questions : { numQuestions[2] - this.state.numberQuestionSolved }</h3>
            <QuestionWrapper
                changeScore={ this.changeScore }
                questions={ thirdYear }
                updateQuestionSolved={ this.updateQuestionSolved }
            />
        </>
    );
    gameRender = (
        <h1>Placeholder for the game</h1>
    );
    render() {
        if (this.state.redirect) {
            return <Redirect to='/obscura/Dashboard'/>
        }
        // two components : Questions Component and Game Component
        return (
            <div className="container" style={{marginBottom:"10%"}} >
                <h1>Welcome to Year 3</h1>
                {/* Adding a go back to dashboard button */}
                <span><Link to="/obscura/dashboard"><button className="btn btn-primary bg-red">Go Back</button></Link></span>

                <h2>Overall Score: {this.state.questionScore+this.state.gameScore}</h2>
                {this.state.showQuestion ? this.questionRender : this.gameRender}
            </div>
        )
    }
}

export default Year1;
