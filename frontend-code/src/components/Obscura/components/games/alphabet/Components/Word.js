import React from "react";
import styles from "../Styles/Word.module.css";

class Word extends React.Component {
    state = {
        left: `${Math.floor(Math.random() * 90)}vw`,
        animation: true
    }

    onAnimationEnd = () => {
        this.props.nextRound(false);
        this.setState({ left: `${Math.floor(Math.random() * 90)}vw`});
    }

    render() {
        if (this.props.found) {
            this.props.clearText()
            this.setState({animation: false})
            setTimeout(() => {
                this.setState({animation: true});
            }, 200);
            this.props.nextRound(true);
            this.setState({ left: `${Math.floor(Math.random() * 90)}vw`});
        }
        return (
            <div
                className={`${styles.word} ${this.state.animation && !this.props.pause ? styles.animation : ""}`}
                onAnimationIteration={this.onAnimationEnd}
                style={{left: `${this.state.left}`}}
            >
                {this.props.word}
            </div>
        );
    }
}

export default Word;
