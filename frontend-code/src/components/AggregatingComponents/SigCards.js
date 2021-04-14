import React from "react";

import Card from "../RenderingComponents/Cards";

import "../../css/sigCards.css";
import { baseUrl } from "../../constants";

const SigCards = (props) => {
    const renderedList = props.cardList.map(({ name, avatar, summary }) => {
        const isSig = !Array.isArray(summary);
        let summaryText = isSig
            ? summary
            : summary.reduce((allSmps, item) => `${item}\n${allSmps}`, "");

        console.log(summaryText);
        const linkOuter = isSig ? "/sig/" : "/smp/";
        return (
            <Card
                key={name}
                name={name}
                avatar={`${baseUrl}${avatar}`}
                summary={summaryText}
                buttonLink={`${linkOuter}${name}`}
            />
        );
    });

    return <div className="row">{renderedList}</div>;
};

export default SigCards;
