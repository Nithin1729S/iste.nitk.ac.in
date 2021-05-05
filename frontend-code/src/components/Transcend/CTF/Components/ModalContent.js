import React from "react";
import Cookies from "universal-cookie";

import styles from "../css/ModalContent.module.css";
import { baseRequest } from "../../../../constants";
class ModalContent extends React.Component {
    state = { inputVal: "", incorrectMessage: "" };

    componentDidMount() {
        const { usedHint1, usedHint2 } = this.props;
        if (usedHint1) {
            this.props.makeRequest(1);
        }
        if (usedHint2) {
            this.props.makeRequest(2);
        }
    }

    onChangeHandler = (e) => {
        this.setState({ inputVal: e.target.value });
    };

    onSubmitHandler = () => {
        const { id } = this.props;
        const cookie = new Cookies();
        const APIBody = {
            teamId: cookie.get("teamId"),
            questionId: id,
            answer: this.state.inputVal,
        };
        baseRequest.post("/ctf/checkAns/", APIBody).then((res) => {
            if (res.data.isCorrect) {
                window.scrollTo(0, 0);
                window.location.reload();
                return;
            }
            this.setState({
                incorrectMessage: `Your answer: ${this.state.inputVal} was incorrect. Try Again!`,
            });
        });
    };
    render() {
        const {
            isAns,
            title,
            desc,
            questionLink,
            onCloseHandler,
            isHint1,
            isHint2,
            usedHint1,
            usedHint2,
            makeRequest,
        } = this.props;

        const hintButtons = (
            <>
                <div className={styles.hintRow}>
                    {usedHint1 ? (
                        <a
                            className={`${styles.hintButton} btn`}
                            href={this.props.hint1URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open Hint 1
                        </a>
                    ) : null}
                    {isHint1 && !usedHint1 && !isAns ? (
                        <button
                            className={`${styles.hintButton} btn`}
                            onClick={() => makeRequest(1)}
                        >
                            Reveal Hint 1
                        </button>
                    ) : null}
                </div>
                <div className={styles.hintRow}>
                    {usedHint2 ? (
                        <a
                            className={`${styles.hintButton} btn`}
                            href={this.props.hint2URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open Hint 2
                        </a>
                    ) : null}
                    {isHint2 && !usedHint2 && !isAns ? (
                        <button
                            className={`${styles.hintButton} btn`}
                            onClick={() => makeRequest(2)}
                        >
                            Reveal Hint 2
                        </button>
                    ) : null}
                </div>
            </>
        );

        return (
            <div className={styles.main}>
                <div className={`${styles.header} center`}>
                    <div className={styles.title}>
                        {" "}
                        <h3>{title}</h3>
                    </div>
                    <span>
                        <button
                            className={`waves-effect waves-light btn-large ${styles.close}`}
                            onClick={onCloseHandler}
                        >
                            <i className="material-icons">close</i>
                        </button>
                    </span>
                </div>
                <div className={`${styles.content}`}>
                    <div className={`${styles.questionBlock} col s12`}>
                        <p>{this.state.incorrectMessage}</p>
                        <p>{desc}</p>
                    </div>
                    <div className={`${styles.questionLink} col s6`}>
                        <a href={questionLink} target="_blank" rel="noreferrer">
                            Click here to view more!
                        </a>
                    </div>
                    {hintButtons}
                    <div className={styles.flexRow}>
                        <i
                            className={`${styles.flag} small material-icons col s1`}
                        >
                            flag
                        </i>
                        <input
                            type="text"
                            className={`${styles.input} col s5 offset-s2`}
                            placeholder="enter flag here"
                            value={this.state.inputVal}
                            onChange={this.onChangeHandler}
                        />
                        <button
                            className={`waves-effect btn-large ${styles.close} ${styles.flexRow} col s3 offset-s2`}
                            onClick={this.onSubmitHandler}
                        >
                            Check
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalContent;
