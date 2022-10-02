import React from "react";
import { withRouter } from 'react-router-dom';

import styles from "./css/crypt.module.css";
import {  inip, inop } from "./TabHead.js";
import { baseRequest } from "../../../../constants";
import TabHead from "./TabHead.js";
import Background from "./Background.js";



class Blackbox extends React.Component {
    validId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //TODO : Rectify state
    state = {
        inputVal: inip,
        inputSeq: [{ input: inip, output: inop }],
        errorMessage: <></>,
        currentScore : 0
    };
    
    // TODO : Update the questionType list
    questionType = [
        'Expects two comma-separated non-negative integer.',
        'Expects single non-negative integer.',
        'Expects single non-negative integer.',
        'Expects two comma-separated non-negative integer.',
        'Expects single non negative integer.',
        'Expects single non negative integer.',
        'Expects single non negative integer.',
        'Expects a word.',
        'Expects a word.'
    ];

    currId =
        Number(this.props.match.params.id) in this.validId
            ? Number(this.props.match.params.id)
            : 1;
    
    numInputKey = `number inputs used : ${this.currId.toString()}`;
    InputObjectKey = `input history : ${this.currId.toString()}`;

    componentDidMount() {
        this.props.setFooterVal("obsidian");

        if (!localStorage.getItem("obsidianUserInfo")) {
            this.props.history.push('/obsidian/login')
        }
        const numInputs = Number(localStorage.getItem(this.numInputKey));
        const userScore = localStorage.getItem('userTotalScore');
        if (numInputs) {
            const initialarray = JSON.parse(
                localStorage.getItem(this.InputObjectKey)
            )
                ? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
                : [{ input: inip, output: inop }];
            this.setState({
                inputSeq: initialarray,
                inputVal: initialarray[0] ? initialarray[0].input : inip,
                currentScore : userScore
            });

            return;
        }
        // updating score value
        this.setState({
            currentScore: userScore
        })
        localStorage.setItem(this.numInputKey, 0);
        localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
    }

    componentDidUpdate() {
        if (Number(this.props.match.params.id) !== this.currId) {
            if (
                Number(this.props.match.params.id) in this.validId &&
                Number(this.props.match.params.id) !== 0
            ) {
                this.currId = Number(this.props.match.params.id);
                this.numInputKey = `number inputs used : ${this.currId.toString()}`;
                this.InputObjectKey = `input history : ${this.currId.toString()}`;
                const numInputs = Number(
                    localStorage.getItem(this.numInputKey)
                );
                if (numInputs) {
                    const initialarray = JSON.parse(
                        localStorage.getItem(this.InputObjectKey)
                    )
                        ? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
                        : [{ input: inip, output: inop }];
                    this.setState({
                        inputSeq: initialarray,
                        inputVal: initialarray[0]
                            ? initialarray[0].input
                            : inip,
                    });
                    return;
                }
                localStorage.setItem(this.numInputKey, 0);
                localStorage.setItem(
                    this.InputObjectKey,
                    JSON.stringify({ arr: [] })
                );
                this.setState({
                    inputSeq: [{ input: inip, output: inop }],
                    inputVal: inip,
                });
                return;
            } else if (this.currId !== 1) {
                this.currId = 1;
                this.numInputKey = `inputs used ${this.currId.toString()}`;
                this.InputObjectKey = `array current ${this.currId.toString()}`;
                const numInputs = Number(
                    localStorage.getItem(this.numInputKey)
                );
                if (numInputs) {
                    const initialarray = JSON.parse(
                        localStorage.getItem(this.InputObjectKey)
                    )
                        ? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
                        : [{ input: inip, output: inop }];
                    this.setState({
                        inputSeq: initialarray,
                        inputVal: initialarray[0]
                            ? initialarray[0].input
                            : inip,
                    });
                    return;
                }
                localStorage.setItem(this.numInputKey, 0);
                localStorage.setItem(
                    this.InputObjectKey,
                    JSON.stringify({ arr: [] })
                );
                this.setState({
                    inputSeq: [{ input: inip, output: inop }],
                    inputVal: inip,
                });
                return;
            }
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            inputVal: e.target.value, 
        });
    };

    callAPI = () => {
        // Placeholder for now
        const currentQuestion = this.currId
        const username = localStorage.getItem("obsidianUserInfo")
        console.log(this.state.inputVal)
        console.log(typeof this.state.inputVal)
        baseRequest
            .get("/obsidian/q" + currentQuestion.toString() + "/", {
                params: {
                    query: this.state.inputVal,
                    username : username
                }
            })
            .then((res) => {
                if (res.data.msg === "Wrong Input") {
                    this.setState({
                        errorMessage: <> Invalid input! Try again. </>,
                        currentScore : res.data.score
                    });
                    return;
                }
                const arrayToBeEntered = JSON.parse(
                    localStorage.getItem(this.InputObjectKey)
                ).arr;
                const ObjectToBeStored = {
                    arr: [
                        { input: this.state.inputVal, output: res.data.ans },
                        ...arrayToBeEntered,
                    ],
                };
                localStorage.setItem(
                    this.InputObjectKey,
                    JSON.stringify(ObjectToBeStored)
                );
                localStorage.setItem(
                    this.numInputKey,
                    Number(localStorage.getItem(this.numInputKey)) + 1
                );
                localStorage.setItem("userTotalScore",res.data.score)
                this.setState({
                    inputSeq: ObjectToBeStored.arr,
                    errorMessage: <> </>, 
                    currentScore : res.data.score
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };
    render() {
        return (
            <div className={ styles.main }>
                {/* 
                    Update the Background component to change style
                    or 
                    leave as-is for me to update
                 */}
                <Background/>
                <div className={ styles.tabHead }>
                    {/*
                        Component for the question selector
                     */}
                    <TabHead idTab={this.currId} />
                </div>

                <div className={styles.title}>
                    <h2>{ `Current Score : ${this.state.currentScore}` }</h2> 
                </div>

                <div className={styles.title}>
                    <h2>{ `question ${this.currId} : ${this.questionType[this.currId-1]}` }</h2> 
                </div>
                <div className={styles.container}>
                    <div className={`center ${styles.input}`}>
                        <div className={styles.heading}>Input</div>
                        <label htmlFor="inputString"> 
                            <input
                                type="text"
                                onChange={this.onChangeHandler}
                                name="inputString"
                                value={ this.state.inputVal }
                                onClick={(e)=>{e.target.value=''}}
                            />
                        </label>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.btncon}>
                            <button
                                className={`btn ${styles.btn}`}
                                onClick={ () => {
                                    this.callAPI()
                                }}
                            >
                                Generate Output
                            </button>
                        </div>
                    </div>
                    <div className={`center ${styles.output}`}>
                        <div className={styles.heading}>Output</div>
                        <div className={styles.opresult}>
                            {this.state.inputSeq[0]
                                ? this.state.inputSeq[0].output
                                : inop}
                        </div>
                    </div>
                </div>
                <div className={`center ${styles.error}`}>
                    {this.state.errorMessage}
                </div>
                <div className={styles.tableMain}>
                    <table className={styles.table}>
                        <tr>
                            <th>Input</th>
                            <th>Output</th>
                        </tr>
                        {this.state.inputSeq.map((item) => (
                            <tr>
                                <td>{item.input}</td>
                                <td>{item.output}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.setFooterVal("");
    }
}
export default withRouter(Blackbox);
