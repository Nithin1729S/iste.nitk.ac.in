import React from "react";

import styles from "./css/crypt.module.css";
import TitleWithLine from "../../RenderingComponents/TitleWithLine";
import { imgAdd, inip, inop } from "./TabHead.js";
import { baseRequest } from "../../../constants";
import TabHead from "./TabHead.js";

class Cryptonite extends React.Component {
    state = {
        inputVal: inip,
        inputSeq: [{ input: inip, output: inop }],
        rotation: 0,
        errorMessage: <></>,
    };
    validId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    currId =
        Number(this.props.match.params.id) in this.validId
            ? Number(this.props.match.params.id)
            : 1;
    numInputKey = `inputs used ${this.currId.toString()}`;
    InputObjectKey = `array current ${this.currId.toString()}`;
    componentDidMount() {
        this.props.setFooterVal("crypt");
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
                this.numInputKey = `inputs used ${this.currId.toString()}`;
                this.InputObjectKey = `array current ${this.currId.toString()}`;
                const numInputs = Number(
                    localStorage.getItem(this.numInputKey)
                );
                if (numInputs) {
                    const initialarray = JSON.parse(
                        localStorage.getItem(this.InputObjectKey)
                    )
                        ? JSON.parse(localStorage.getItem(this.InputObjectKey))
                              .arr
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
                        ? JSON.parse(localStorage.getItem(this.InputObjectKey))
                              .arr
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
        this.setState({ inputVal: e.target.value });
    };
    callAPI = () => {
        this.setState({ rotation: 1 });
        baseRequest
            .post("/cryptonite/blackbox/", {
                id: this.currId.toString(),
                input: this.state.inputVal,
            })
            .then((res) => {
                if (res.data.answer === "Input not viable.") {
                    this.setState({
                        rotation: 0,
                        errorMessage: <>Invalid input! Try again.</>,
                    });
                    return;
                }
                const arrayToBeEntered = JSON.parse(
                    localStorage.getItem(this.InputObjectKey)
                ).arr;
                const ObjectToBeStored = {
                    arr: [
                        { input: this.state.inputVal, output: res.data.answer },
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
                });
            })
            .catch(() => {
                console.log("error");
            });
    };
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.tabHead}>
                    <TabHead idTab={this.currId} />
                </div>

                <div className={styles.title}>
                    <h3>{`Question ${this.currId}`}</h3>
                </div>
                <div className={styles.container}>
                    <div className={`center ${styles.input}`}>
                        <div className={styles.heading}>Input</div>
                        <label htmlFor="inputString">
                            <input
                                type="text"
                                onChange={this.onChangeHandler}
                                name="inputString"
                                value={this.state.inputVal}
                            />
                        </label>
                    </div>

                    <div className={styles.mainContent}>
                        <div className={styles.blackBoxContainer}>
                            <div className={styles.blackBox}>
                                <div className={styles.blackBoxFront}>
                                    <img
                                        src={imgAdd}
                                        className={styles.image}
                                        alt="Black Box"
                                    />
                                </div>
                                <div className={styles.blackBoxA} />
                                <div className={styles.blackBoxB} />
                                <div className={styles.blackBoxC} />
                                <div className={styles.blackBoxD} />
                                <div className={styles.blackBoxE} />
                            </div>
                        </div>

                        {this.state.rotation ? (
                            <div className={styles.btncon}>
                                <button
                                    className={`btn indigo ${styles.btn}`}
                                    onClick={this.callAPI}
                                    disabled
                                >
                                    Generate Output
                                </button>
                            </div>
                        ) : (
                            <div className={styles.btncon}>
                                <button
                                    className={`btn ${styles.btn}`}
                                    onClick={this.callAPI}
                                >
                                    Generate Output
                                </button>
                            </div>
                        )}
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
export default Cryptonite;
