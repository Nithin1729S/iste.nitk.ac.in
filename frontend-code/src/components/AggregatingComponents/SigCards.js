import React from "react";

import Card from "../RenderingComponents/Cards";
import TitleWithLine from "../RenderingComponents/TitleWithLine";

import "../../css/sigCards.css";

const SigCards = (props) => {
    const renderedList = props.cardList.map(function (item) {
        return (
            <Card
                key={item.name}
                name={item.name}
                avatar={`http://127.0.0.1:8000${item.avatar}`}
                summary={item.summary}
            />
        );
    });

    return (
        <div className="container sigCard">
            <TitleWithLine title="Special Interest Groups SIG(s)"/>
            <div className="row">{renderedList}</div>
        </div>
    );
};

export default SigCards;
