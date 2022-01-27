import React, { Component } from 'react';
import QuestionWrapper from '../QuestionWrapper'
import {firstYear} from '../../constants/questions.js'
class Year1 extends Component {
    state = {
        numberQuestionSolved: 0,
        questions: [],
        questionScore: 0,
        
    }
    componentDidMount() {
        console.log(firstYear)
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
    changeScore=(val)=>{
        //update score on question attempt
        // -30 for incorrect
        // 300 for correct 
        this.setState({
            questionScore : this.state.questionScore + val 
        })
    }
    render() {
        //add two components here
        // Questions component
        // Game component
        // when all questions are solved 
        // make game component visible and hide game component when all questions are solved
        return (
            <div className="container" style={{margin:"10%"}} >
                <h1>Welcome to Year 1</h1>
                <h2>Score: {this.state.questionScore}</h2>
                {   this.state.numberQuestionSolved <2 ? 
                    (<>
                        <h3>Remaining Questions : { 2 - this.state.numberQuestionSolved }</h3>
                        <QuestionWrapper
                            changeScore={ this.changeScore } 
                            questions={ this.state.questions }
                            updateQuestionSolved = {this.updateQuestionSolved}
                        />
                    </>
                    ) : 
                    <h1>Game Placeholder</h1>
                }
            </div>
    )
  }
}

export default Year1;
