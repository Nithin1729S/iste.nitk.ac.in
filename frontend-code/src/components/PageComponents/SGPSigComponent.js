import React from "react";

import SigProjectCard from "../RenderingComponents/SigProjectCard";
import { baseRequest } from "../../constants";
import TitleWithLine from "../RenderingComponents/TitleWithLine";

class SGPSigComponent extends React.Component {
    state = { data: [] };
    componentDidMount() {
        const { match } = this.props;
        baseRequest
            .get(`/smp/${match.params.name}/`)
            .then((res) => this.setState({ data: res.data }));
    }
    render() {
        if (!this.state.data) return null;
        const smpsList = this.state.data.map((item) => {
            const { id, name, summary, img_url, file_url, softwares } = item;
            return (
                <div className="row project-item">
                    <SigProjectCard
                        key={id}
                        isImageLeft={true}
                        projID={file_url}
                        name={name}
                        description={summary}
                        imgUrl={img_url}
                        isLinkExternal={true}
                        tools={softwares}
                    />
                </div>
            );
        });
        return (
            <div className="center">
                <TitleWithLine title={this.props.match.params.name} />
                <a
                    href="https://forms.gle/FEHT79UVNvMzp9JMA"
                    className="waves-light btn"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        marginBottom: "20px",
                        background: "var(--primary)",
                    }}
                >
                    Click here to register!!!
                </a>
                {smpsList}
            </div>
        );
    }
}
export default SGPSigComponent;
