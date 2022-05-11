import React from "react";
import styled from 'styled-components'

import SigCards from "../AggregatingComponents/SigCards";
import TitleWithLine from "../RenderingComponents/TitleWithLine";
import FAQ from "../Recruitment/components/recsLandingPage/FAQComponent"
import { questions } from "../SMP22/faq";
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
            <PageContainer>
                <img
                    src={`${baseUrl}${this.state.data.banner_url}`}
                    alt="smps"
                    style={{ width: "100%" }}
                />
                <div className="container center">
                    <TitleWithLine title="Why take SMPs?" />
                    <p className="text text-lighten-4">
                        {this.state.data.why_smps_text}
                    </p>
                    <a
                        href="https://forms.gle/FEHT79UVNvMzp9JMA"
                        className="waves-light btn pulse"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            marginBottom: "20px",
                            background: "var(--primary)",
                        }}
                    >
                        Click here to register!!!
                    </a>
                    <SigCards
                        cardList={this.state.data.sigs}
                        linkOuter={"/smp/"}
                    />
                    
                </div>
                <div style={{ marginBottom: '5vh' }}>
					<FAQ questions={questions}/>
				</div>
            </PageContainer>
        );
    }
}

export default SMPComponent;

const PageContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    height:100%; */
    margin-top : -64px;
`
