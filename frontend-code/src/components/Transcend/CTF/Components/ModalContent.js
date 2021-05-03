import React from "react";
import Cookies from "universal-cookie";

import styles from "../css/ModalContent.module.css";
import { baseRequest } from "../../../../constants";
class ModalContent extends React.Component {
    state = { inputVal: "", incorrectMessage: "" };
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
            console.log(res.data);
            if (res.data.isCorrect) {
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
            title,
            desc,
            questionLink,
            hintLink,
            onCloseHandler,
        } = this.props;
        return (
            <>
                <div className={styles.header}>
                    <p> {title}</p>
                    <span>
                        <button
                            className={`waves-effect waves-light btn-large ${styles.top}`}
                            onClick={onCloseHandler}
                        >
                            <i class="material-icons">close</i>
                        </button>
                    </span>
                </div>
                <div className={`${styles.content} row`}>
                    <div className={`${styles.questionBlock} col s12`}>
                        <p>{this.state.incorrectMessage}</p>
                        <p>{desc}</p>
                    </div>
                    <div className={`${styles.questionLink} col s6`}>
                        <a href={questionLink} target="_blank" rel="noreferrer">
                            Click here to view more!
                        </a>
                    </div>
                    <div className={`${styles.hintLink} col s6`}>
                        <span>
                            <p>{hintLink}</p>
                        </span>
                    </div>

                    <i
                        className={`small material-icons indigo-text text-darken-4 col s1 ${styles.flag}`}
                    >
                        flag
                    </i>
                    <div>
                        <input
                            type="text"
                            className=" col s5 offset-s2 "
                            placeholder="enter flag here"
                            value={this.state.inputVal}
                            onChange={this.onChangeHandler}
                        />
                        <button
                            className={`waves-effect btn-large ${styles.close} col s3 offset-s2`}
                            onClick={this.onSubmitHandler}
                        >
                            <i className="material-icons right">send</i>Send
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
export default ModalContent;
