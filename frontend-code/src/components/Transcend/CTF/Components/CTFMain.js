import React from "react";
import Cookies from "universal-cookie";

import QuestionList from "./QuestionList";
import CTFHeader from "./CTFHeader";

import styles from "../css/CTFMain.module.css";
import { baseRequest } from "../../../../constants";
class CTFMain extends React.Component {
    state = { questions: [] };
    componentDidMount() {
        const cookie = new Cookies();
        const APIBody = { teamId: cookie.get("teamId") };
        baseRequest.post("/ctf/questions/", APIBody).then((res) => {
            this.setState({ questions: res.data.questions });
            console.log(res.data);
        });
    }

    render() {
        return (
            <div className={styles.main}>
                <div className="container">
                    <CTFHeader />
                </div>
                <QuestionList data={this.state.questions} />
            </div>
        );
    }
}
export default CTFMain;
