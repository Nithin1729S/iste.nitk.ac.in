import React, { Component } from 'react';
import QuestionList from '../QuestionsList'
import {firstYear} from '../../constants/questions.js'
class Year1 extends Component {
    state = {
        numberQuestionSolved: 0,
        questions : []
    }
    componentDidMount(){
        const shuffled = firstYear.sort(() => 0.5 - Math.random())
        this.setState({
            questions : shuffled.slice(0,2)
        })
    }
    updateQuestionSolved = () => {
        this.setState({
            numberQuestionSolved: this.state.numberQuestionSolved + 1,
        })
    }
    render() {
        //add two components here
        // Questions component
        // Game component
        // when all questions are solved 
        // make game component visible and hide game component when all questions are solved
        return (
            <div className="container">
                <h1>Welcome to Year 1</h1>
                <h2>You have solved { this.state.numberQuestionSolved } questions</h2>
                <QuestionList
                    updateQuestionSolved={ this.updateQuestionSolved } 
                    questions={ this.state.questions }
                    numQuestions = {2}
                />
            </div>
    )
  }
}

export default Year1;
