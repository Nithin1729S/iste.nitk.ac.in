import React from "react";

import NumList from "../AggregatingComponents/NumList";
import TitleWithLine from "../RenderingComponents/TitleWithLine";

const TheNumbers = (props) => {
    const renderedList = (
        <NumList
            years_in_operation={props.stats.years_in_operation}
            member_count={props.stats.member_count}
            project={props.stats.project}
        />
    );

    return (
        <div className="container">
            <TitleWithLine title="The Numbers" />
            <div className="row">{renderedList}</div>
        </div>
    );
};

export default TheNumbers;
