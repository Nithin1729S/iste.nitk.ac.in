import React from "react";

import SigCards from "../AggregatingComponents/SigCards";
import TitleWithLine from "../RenderingComponents/TitleWithLine";
import { baseRequest, baseUrl } from "../../constants";

class SMPComponent extends React.Component {
    state = { data: {} };
    componentDidMount() {
        baseRequest
            .get("/smp/")
            .then((res) => this.setState({ data: res.data }));
    }
    render() {
        if (!this.state.data.sigs) return null;
        return (
            <div className="container center">
                <img
                    src={`${baseUrl}${this.state.data.banner_url}`}
                    alt="smps"
                />
                <TitleWithLine title="ISTE SMPs" />
                <TitleWithLine title="Why SMPs" />
                <p className="text text-lighten-4">
                    {this.state.data.why_smps_text}
                </p>
                <SigCards cardList={this.state.data.sigs} linkOuter={"/smp/"} />
            </div>
        );
    }
}
export default SMPComponent;
