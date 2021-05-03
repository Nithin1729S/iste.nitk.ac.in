import React from "react";

import QuestionItem from "./QuestionItem";

import styles from "../css/QuestionList.module.css";
class QuestionList extends React.Component {
    // ** Question table: questionId, Title, description, points, url, hint1Url, hint2Url
    data = [
        {
            questionId: 1,
            status: true,
            Title: "Charge A",
            description: "jsbgqjrbgkerjbg",
            points: "30",
            url: "www.google.com",
            hint1Url: "",
            hint2Url: "",
        }
    ];

    QuestionItems = this.props.data.map((item) => <QuestionItem item={item} />);

    render() {
        return <div className={styles.main}>{this.QuestionItems}</div>;
    }
}
export default QuestionList;
