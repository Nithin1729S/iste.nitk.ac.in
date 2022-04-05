import React from "react";

const General = (props) => {
  return (
    <div className="container">
      <h1 className="center-align">{props.heading}</h1>
      <div style={{fontSize: 30}}>
        {props.children}
      </div>
    </div>
  );
}

export default General;
