import React from "react";

import QuestionList from "./QuestionList";
import CTFHeader from "./CTFHeader";

import styles from "../css/CTFMain.module.css";
class CTFMain extends React.Component {
    componentDidMount() {
        //TODO: Make get questions API request here
    }

    render() {
        return (
            <div className={styles.main}>
                <div className="container">
                    <CTFHeader name="Team Name" score={200} />
                </div>
                <QuestionList />
            </div>
        );
    }
}
export default CTFMain;
