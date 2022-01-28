import React from 'react';
import {Link} from 'react-router-dom'

const YearCard = ({ title, link, score, disabled }) => {

  const PassedCard = (
    <Link to={ `${link}` }>
    <div className="card" style={ { border: "1px solid green" } }>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
            <h5>Score: { score }</h5>
      </div>
    </div>
  </Link>
  );
  const DisabledCard = (
    <div className="card" style={ { border: "1px solid red" } }>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
            <h5>Score: { score }</h5>
      </div>
    </div>
  );

  return (
    <div className="col s6"> 
        {disabled ? DisabledCard : PassedCard}
    </div>
  );
};

export default YearCard;
