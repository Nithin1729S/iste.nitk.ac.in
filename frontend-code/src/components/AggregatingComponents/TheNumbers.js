import React from "react";
import NumList from "../RenderingComponents/NumList";

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
      <h3 className="center-align">
        <span className="animatedLine viewed">In Numbers</span>
      </h3>
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default TheNumbers;
