import React from "react";
import Cookies from "universal-cookie";

import QuestionList from "./QuestionList";
import CTFHeader from "./CTFHeader";

import styles from "../css/CTFMain.module.css";
import { baseRequest } from "../../../../constants";
class CTFMain extends React.Component {
    state = { questions: [], name: "", score: "" };
    componentDidMount() {
        const cookie = new Cookies();
        const APIBody = { teamId: cookie.get("teamId") };
        baseRequest.post("/ctf/questions/", APIBody).then((res) => {
            this.setState({
                questions: res.data.questions,
                score: res.data.score,
                name: res.data.team_name,
            });
        });
    }

    render() {
        return (
            <div className={styles.main}>
                <div className="container">
                    <CTFHeader
                        name={this.state.name}
                        score={this.state.score}
                    />
                    <div className={`${styles.para} center`}>
                        <p>
                            <i>Backstory will be here</i>
                        </p>
                    </div>
                    <div className={`${styles.instructions} center`}>
                        <h3>Instructions</h3>
                        <ul>
                            <li>
                                Each hint leads to a direct reduction of 33%
                                score for any question
                            </li>
                            <li>This is the second instruction</li>
                        </ul>
                    </div>
                </div>
                <QuestionList data={this.state.questions} />
            </div>
        );
    }
}
export default CTFMain;
