import React from "react";

import "../../css/titleWithLine.css";
const TitleWithLine = ({title}) => {
    return (
        <h3 className="title">
            <span className="animateLine">{title}</span>
        </h3>
    );
};
export default TitleWithLine;
