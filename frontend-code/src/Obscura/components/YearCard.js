import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const YearCard = ({ title, link, score, disabled }) => {

  const PassedCard = (
    <Link to={ `${link}` }>
    <Card passed edclassName="card" >
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
          <h5>Score: { score }</h5>
          <h6>Passed</h6>
      </div>
    </Card>
  </Link>
  );
  const DisabledCard = (
    <Card disabled={true} className="card">
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="col s6"> 
        {disabled ? DisabledCard : PassedCard}
    </div>
  );
};

const Card = styled.div`
  max-width: 550px;
  height: 80%;
  width: 100%;
  padding: 64px;
  margin: 0px 16px;
  background-color: #262626;
  border-radius: 8px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  h3 {
    font-size: 40px !important;
    color: #ffeaea !important;
  }
  h5{
    font-size: 24px !important;
    color: #ffeaea !important;
    text-align: center;
  }
  h6{
    color : green;
    text-align: center;
  }
`

export default YearCard;
