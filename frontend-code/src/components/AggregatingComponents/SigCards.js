import React from "react";

import Card from "../RenderingComponents/Cards";

import "../../css/sigCards.css";
import { baseUrl } from "../../constants";

const SigCards = (props) => {
    const renderedList = props.cardList.map(({ name, avatar, summary }) => {
        return (
            <Card
                key={name}
                name={name}
                avatar={`${baseUrl}${avatar}`}
                summary={summary.map((item) => `${item} `)}
            />
        );
    });

    return <div className="row">{renderedList}</div>;
};

export default SigCards;
