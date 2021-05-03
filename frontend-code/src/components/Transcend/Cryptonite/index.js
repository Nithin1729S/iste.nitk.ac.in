import React from "react";

import { baseRequest } from "../../../constants";

class Cryptonite extends React.Component {
    state = {
        inputVal:
            "Input format must be integers separated by commas, no spaces.",
    };
    currId = this.props.match.params.id;
    numInputKey = `inputs used ${this.currId}`;
    InputObjectKey = `array current ${this.currId}`;
    componentDidMount() {
        const numInputs = localStorage.getItem(this.numInputKey);
        if (numInputs) {
            //TODO: Load up the data for the user here
            return;
        }
        localStorage.setItem(this.numInputKey, 0);
        localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
    }
    onChangeHandler = (e) => {
        this.setState({ inputVal: e.target.value });
    };
    callAPI = () => {
        //TODO: add API call. increment number of inputs ONLY on successful return from API
        const arrayToBeEntered = JSON.parse(
            localStorage.getItem(this.InputObjectKey)
        ).arr;
        const ObjectToBeStored = {
            arr: [
                ...arrayToBeEntered,
                { input: this.state.inputVal, output: "this.state.inputVal" },
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
        this.forceUpdate();
    };
    render() {
        return (
            <div className="container">
                <label htmlFor="inputString">
                    Enter Input Here:
                    <input
                        type="text"
                        onChange={this.onChangeHandler}
                        name="inputString"
                        value={this.state.inputVal}
                    />
                    <button className="btn indigo" onClick={this.callAPI}>
                        Get corresponding output
                    </button>
                    {JSON.parse(
                        localStorage.getItem(this.InputObjectKey)
                    )?.arr?.map((item) => (
                        <>
                            {item.input}
                            {item.output}
                        </>
                    ))}
                </label>
            </div>
        );
    }
}
export default Cryptonite;
