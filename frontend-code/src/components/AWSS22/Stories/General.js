import React from "react";
import { Link } from "react-router-dom";

const General = (props) => {
  return (
    <div style={{padding: '0 5vw'}}>
      <Link
        to="/awss"
        style={{color: 'black', fontWeight: 'bold', fontSize: 20}}
      >Back</Link>
      <h1 className="center-align">{props.heading}</h1>
      <div style={{fontSize: 30}}>
        {props.children}
      </div>
      <div
        className="center-align"
        style={{color: 'black', fontSize: 20}}
      >
        This story was written by <strong style={{fontWeight: 'bold'}}>{props.writer}</strong>, a
        second year <strong style={{fontWeight: 'bold'}}>{props.branch}</strong> BTech student
      </div>
    </div>
  );
}

export default General;
