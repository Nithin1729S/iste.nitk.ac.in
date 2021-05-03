import React from "react";

import QuestionList from "./QuestionList";
import CTFHeader from "./CTFHeader";

import styles from "../css/CTFMain.module.css";
import { baseRequest } from "../../../../constants";
class CTFMain extends React.Component {
    componentDidMount() {
        baseRequest.get('/ctf/questions')
    }

    render() {
        return (
            <div className={styles.main}>
                <div className="container">
                    <CTFHeader  />
                </div>
                <QuestionList />
            </div>
        );
    }
}
export default CTFMain;
