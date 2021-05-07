import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

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
                                Each hint leads to a direct reduction of 20% of
                                total score for the same question.
                            </li>
                            <li>
                                The flag is a string of alphanumeric characters
                                without any spaces (if need be, use _ for
                                space).
                            </li>
                            <li>
                                There may be multiple approaches towards solving
                                each question, each approach leads to the same
                                alphanumeric flag, thus, each question has only
                                one correct answer.
                            </li>
                            <li>
                                The leaderboard{" "}
                                <Link
                                    to="/leaderboard"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    (Click here to view)
                                </Link>{" "}
                                displays the correct score, with appropriate
                                deduction of score for all correctly answered
                                questions.
                            </li>
                            <li>
                                All ties will be broken in favour of the team
                                reaching the score first.
                            </li>
                            <li>
                                Link to install LTSpice:
                                <a
                                    href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    Click Here
                                </a>
                            </li>
                            <li>
                                Link to install Logism:
                                <a
                                    href="https://sourceforge.net/projects/circuit/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    Click Here
                                </a>
                            </li>
                            <li>
                                Link to install Ghidra:
                                <a
                                    href="https://ghidra-sre.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    Click Here
                                </a>
                            </li>
                            <li>
                                Link to install Python:
                                <a
                                    href="https://www.python.org/downloads/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    Click Here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <QuestionList data={this.state.questions} />
            </div>
        );
    }
}
export default CTFMain;
