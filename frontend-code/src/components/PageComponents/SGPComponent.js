import React from "react";

import SigCards from "../AggregatingComponents/SigCards";
import { baseRequest } from "../../constants";

class SMPComponent extends React.Component {
    state = { data: {} };
    componentDidMount() {
        baseRequest
            .get("/smp/")
            .then((res) => this.setState({ data: res.data }));
    }
    render() {
        if (!this.state.data.sigs) return null;
        return <SigCards cardList={this.state.data.sigs} />;
    }
}
export default SMPComponent;
