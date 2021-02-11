import React from "react";

import "../../css/titleWithLine.css";
const TitleWithLine = (props) => {
    return (
        <h3 className="title">
            <span class="animateLine">{props.title}</span>
        </h3>
    );
};
export default TitleWithLine;
