import React from "react";
import styles from "../Styles/GameOver.module.css";

// import State1 from "../Images/state1.png";
// import State2 from "../Images/state2.png";
// import State4 from "../Images/state4.png";

class GameOver extends React.Component {
    // scoreComment(score) {
    //     if (score <= 10) {
    //         return (
    //             <>
    //             <img src={State1} width={200} />
    //             <br />
    //             I hope that was fun for you!
    //             </>
    //         );
    //     } else if (score <= 30) {
    //         return (
    //             <>
    //             <img src={State2} width={200} />
    //             <br />
    //             That was cool, what you did there :)
    //             </>
    //         );
    //     } else {
    //         return (
    //             <>
    //             <img src={State4} width={200} />
    //             <br />
    //             That. Was. AWESOME!!!
    //             </>
    //         );
    //     }
    // }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.heading}>
                    Game Over!
                </div>
                <div className={styles.score}>
                    Score: {this.props.score}
                </div>
                {/* <div className={styles.comment}>
                    {this.scoreComment(this.props.score)}
                </div> */}
                <button
                    onClick={() => {this.props.restart();}}
                    className={styles.restart}
                >Play Again</button>
                <button
                    onClick={() => {this.props.gameOver()}}
                    className={styles.restart}
                >Go to Dashboard</button>
            </div>
        );
    }
}

export default GameOver;
