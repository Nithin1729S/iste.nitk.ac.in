import React from "react";

import SGPList from "../AggregatingComponents/SGPList";
import {baseRequest} from "../../constants";

class SGPSigComponent extends React.Component {
    state = { data: {} };
    componentDidMount() {
        baseRequest
            .get("/smp/")
            .then((res) => this.setState({ data: res.data }));
    }
    render() {
        if (!this.state.data.smps) return null;
        const { smps } = this.state.data;
        const smpsList = Object.keys(smps).map((key) => {
            const data = smps[key];
            const title = key;
            return (
                <>
                    <h3>{title}</h3>
                    <SGPList data={data} />
                </>
            );
        });
        return (
            <div className="center">
                {smpsList}
            </div>
        );
    }
}
export default SGPSigComponent;
