import React, { Component } from 'react';


class Year1 extends Component {
    state = {
        numberQuestionSolved: 0,
    }
    checkAns = () => {
        // TODO : implement answer check logic
        this.setState({
            numberQuestionSolved: this.state.numberQuestionSolved + 1,
        })
    }
    render() {
        return (
            <div className="container">
                <h3>
                    Question Score : {this.state.numberQuestionSolved < 2 ? this.state.numberQuestionSolved : "2"}
                </h3>
                { this.state.numberQuestionSolved <= 2 &&
                    <div className="container">
                    <button className="btn btn-primary" onClick={this.checkAns}>ans</button>
                </div>}
                { this.state.numberQuestionSolved > 2 && <h1>Game</h1>}
            </div>
    )
  }
}

export default Year1;
