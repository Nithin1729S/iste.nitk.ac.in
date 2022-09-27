import React from "react";

import styles from "./css/crypt.module.css";
import {  inip, inop } from "./TabHead.js";
import { baseRequest } from "../../../../constants";
import TabHead from "./TabHead.js";
import Background from "./Background.js";



class Blackbox extends React.Component {
    state = {
        inputVal: inip,
        inputSeq: [{ input: inip, output: inop }],
        errorMessage: <></>,
        numberOfInputs : 0
    };
    validId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    questionType = [
        'Expects single non-negative integer. Find the function',
        'Expects single non-negative integer. Find the function',
        'Expects single integer. Find the function',
        'Expects single capital character. What does I,M,P map to?',
        'Expects single non negative integer. Find the function',
        'Expects single non negative integer. Find the sequence',
        'Expects a word. Guess the function',
        'Expects a single capital character. Find the mapping of DOG',
        'Expects a single integer. Find the function'
    ];

    currId =
        Number(this.props.match.params.id) in this.validId
            ? Number(this.props.match.params.id)
            : 1;
    
    numInputKey = `number inputs used : ${this.currId.toString()}`;
    InputObjectKey = `input history : ${this.currId.toString()}`;

    componentDidMount() {
        this.props.setFooterVal("cryptonite");

        const numInputs = Number(localStorage.getItem(this.numInputKey));
        
        if (numInputs) {
            const initialarray = JSON.parse(
                localStorage.getItem(this.InputObjectKey)
            )
                ? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
                : [{ input: inip, output: inop }];
            this.setState({
                inputSeq: initialarray,
                inputVal: initialarray[0] ? initialarray[0].input : inip,
                numberOfInputs: numInputs
            });
            return;
        }
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
                        numberOfInputs : numInputs
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
                    numberOfInputs : numInputs
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
                        numberOfInputs : numInputs
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
                    numberOfInputs : numInputs
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

    //TODO : Update API calls 
    callAPI = () => {
        // this.setState({ rotation: 1 });
        baseRequest
            .get("/cryptonite/q"+this.currId.toString()+"/", {
                // id: this.currId.toString(),
                // // input: this.state.inputVal,
                params: {
                    query : this.state.inputVal,
                }
            })
            .then((res) => {
                
                let numInputs = Number(localStorage.getItem(this.numInputKey))
                if (res.data.msg === "Wrong Input") {
                    this.setState({
                        errorMessage: <> Invalid input! Try again. </>,
                        numberOfInputs : numInputs+1
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
                this.setState({
                    inputSeq: ObjectToBeStored.arr,
                    rotation: 0,
                    errorMessage: <> </>,
                    numberOfInputs : numInputs+1
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };
    render() {
        return (
            <div className={styles.main}>
                <Background/>
                <div className={styles.tabHead}>
                    <TabHead idTab={this.currId} />
                </div>
                <div className={styles.title}>
                    <h2>{ `Attempt Number : ${this.state.numberOfInputs}` }</h2> 
                    {/* <p>{this.questionType[this.currId-1]}</p> */}
                </div>
                <div className={styles.title}>
                    <h2>{ `Question ${this.currId} : ${this.questionType[this.currId-1]}` }</h2> 
                    {/* <p>{this.questionType[this.currId-1]}</p> */}
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
export default Blackbox;
