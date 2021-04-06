import React from "react";

import SGPList from "../AggregatingComponents/SGPList";
import TitleWithLine from "../RenderingComponents/TitleWithLine";

const data = {
    title: "ISTE SGPs",
    sigs: [{ title: "catalyst", data: [{}] }],
};

class SGPComponent extends React.Component {
    state = { data: { data } };
    componentDidMount() {
        //TODO: add api request
    }
    render() {
        const { title, sigs } = data;
        const sigsList = sigs.map(({ title, data }) => (
            <>
                <h3>{title}</h3>
                <SGPList data={data} />
            </>
        ));
        return (
            <div className="center">
                <TitleWithLine title={title} />
                {sigsList}
            </div>
        );
    }
}
export default SGPComponent;
