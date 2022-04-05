import React from "react";
import { Link } from "react-router-dom";

const General = (props) => {
  return (
    <div className="container">
      <Link
        to="/awss"
        style={{color: 'black', fontWeight: 'bold', fontSize: 20}}
      >Back</Link>
      <h1 className="center-align">{props.heading}</h1>
      <div style={{fontSize: 30}}>
        {props.children}
      </div>
    </div>
  );
}

export default General;
