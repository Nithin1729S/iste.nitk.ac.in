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
                            <pre>
                                "Okay, Houston...we've had a problem here"
                                <br />
                                <br />
                                However, the message never got transmitted
                                because an unprecedented belt of asteroids
                                pummeled the International Space Station (ISS)
                                and now all that is left of its communications
                                chamber is a mangled mess. You are among a team
                                of astronauts at the ISS and you need to restore
                                contact with earth ASAP to get immediate
                                support. Being the only one with a core
                                Electronics Engineering background on the team,
                                you are overseeing the repair works. Due to
                                shifted geographical locations, your team will
                                be trying to establish contact with any of the
                                major space stations on earth, to tackle this
                                unfortunate scenario.
                            </pre>
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
