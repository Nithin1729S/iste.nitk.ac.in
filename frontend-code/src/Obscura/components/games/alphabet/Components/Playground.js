import React from "react";
import styles from "../Styles/Playground.module.css";

import HeartBar from "./HeartBar";
import Score from "./Score";
import Word from "./Word";
import GameOver from "./GameOver";
import Instructions from "./Instructions";


function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Playground extends React.Component {
    words = [ 'Amul', 'Mega Tower', 'Vindhya', 'Satpura', 'Nilgiris', 'Aravali', 'Karavali', 'Himachal', 'Kailash', 'Everest', 'Nescafe', 'Library', 'Sports', 'Complex', 'Mess', 'Canteen', 'Beach', 'Nandini', 'SAC', 'FNH', 'Samudra', 'Darshan', 'Underpass', 'Department', 'ISTE', 'Club', 'Red Rock', 'Pabbas', 'Forum Fiza', 'Surathkal', 'Mangalore', 'Dean', 'Obscura', 'Square One'];
    state = {
        text: "",
        words: "",
        visible: false,
        found: false,
        lives: 3,
        score: 0,
        status: "instructions",
        pause: false,
        word: `${this.words[getRandomNumberBetween(0, this.words.length-1)]}`,
    }
    
    onKeyPress = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value});
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const w = this.state.text;
        this.setState({text: "", words: w, visible: true});
        if (w.toLowerCase() === this.state.word.toLowerCase()) {
            this.setState({found: true, score: this.state.score+10});
        }
        else {
            this.nextRound(false)
        }
        setTimeout(() => {
            this.setState({visible: false});
        }, 1000);
    }
    
    nextWord = () => {
        this.setState({
            word: `${this.words[getRandomNumberBetween(0, this.words.length-1)]}`,
            found: false,
        });
    }
    
    nextRound = (win) => {
        if (!win) {
            this.setState({found: true, lives: this.state.lives-1});
            if (this.state.lives === 1) {
                this.setState({ status: "over" }, () => {
                    const { changeScore } = this.props;
                    changeScore(this.state.score);
                });
            }
        } else {
            this.nextWord();
        }
    }
    
    resetGame = () => {
        this.setState({
            text: "",
            words: "",
            visible: false,
            found: false,
            lives: 3,
            score: 0,
            status: "playing",
            word: `${this.words[getRandomNumberBetween(0, this.words.length-1)]}`,
        });
    }
    
    toggleGame = () => {
        this.setState({pause: !this.state.pause});
    }
    
    
    playGame = () => {
        if (this.state.status === "playing") {
            return (
                <>
                    <div className={ styles.infoBoard }>
                        <HeartBar lives={ this.state.lives } />
                        <div className={ `${styles.words} ${this.state.visible ? styles.visible : styles.invisible}` }>
                            { this.state.words }
                        </div>
                        <Score score={ this.state.score } />
                    </div>
                    <form className={ styles.main } onSubmit={ this.onSubmit }>
                        <input type="text" value={ this.state.text } className={ styles.text } onChange={ this.onKeyPress }
                            style={ { pointerEvents: `${this.props.pause ? "none" : ""}` } } autoFocus />
                    </form>
                    <Word
                        found={ this.state.found }
                        word={ this.state.word }
                        nextRound={ this.nextRound }
                        pause={ this.props.pause } />
                </>
            );
        }
        else if (this.state.status === "over") {
            return (
                <GameOver
                    changeScore={ this.props.changeScore } 
                    gameOver={this.props.gameOver}
                    score={ this.state.score }
                    restart={ this.resetGame }
                />
            );
        } else if (this.state.status === "instructions") {
            return <Instructions startGame={ this.resetGame } />;
        }
    }

    render() {
        return (
            <div className={styles.playground}>
                {this.playGame()}
            </div>
        );
    }
}

export default Playground;
