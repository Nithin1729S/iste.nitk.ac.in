import React from "react";
import styles from "../css/QuestionItem.module.css";

class QuestionItem extends React.Component {
    modalHandler = () => {
        console.log("anystring");
    };
    render() {
        const {
            questionId,
            status,
            Title,
            description,
            points,
            url,
            hint1Url,
            hint2Url,
        } = this.props.item;
        return (
            <div
                onClick={this.modalHandler}
                className={`${styles.box} ${status ? styles.attempted : null}`}
            >
                <h3 className={styles.title}>{Title}</h3>
                <h5>{points}</h5>
            </div>
        );
    }
}
export default QuestionItem;
