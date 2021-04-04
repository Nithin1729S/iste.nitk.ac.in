import React from "react";

import "../RenderingComponents/QuestionItem";
import QuestionItem from "../RenderingComponents/QuestionItem";

import styles from "../../css/QuestionList.module.css";
class QuestionList extends React.Component {
    // ** Question table: questionId, Title, description, points, url, hint1Url, hint2Url
    data = [
        {
            questionId: 1,
            status: true,
            Title: "Charge rocks",
            description: "",
            points: "30",
            url: "",
            hint1Url: "",
            hint2Url: "",
        },
        {
            questionId: 2,
            status: true,
            Title: "Charge is amazing",
            description: "",
            points: "70",
            url: "",
            hint1Url: "",
            hint2Url: "",
        },
        {
            questionId: 3,
            status: false,
            Title: "Charge the best",
            description: "",
            points: "100",
            url: "",
            hint1Url: "",
            hint2Url: "",
        },
    ];
    componentDidMount() {
        //TODO: replace with api request
    }

    QuestionItems = this.data.map((item) => <QuestionItem item={item} />);

    render() {
        return <div className={styles.main}>{this.QuestionItems}</div>;
    }
}
export default QuestionList;
