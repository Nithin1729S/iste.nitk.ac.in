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
                <TitleWithLine title="Why take SMPs?" />

                <p className="text text-lighten-4">
                    {this.state.data.why_smps_text}
                </p>
                <a
                    href="https://forms.gle/FEHT79UVNvMzp9JMA"
                    className="waves-effect waves-light btn"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        marginBottom: "20px",
                        background: "var(--primary)",
                    }}
                >
                    Click here to register!!!
                </a>
                <SigCards cardList={this.state.data.sigs} linkOuter={"/smp/"} />
            </div>
        );
    }
}
export default SMPComponent;
