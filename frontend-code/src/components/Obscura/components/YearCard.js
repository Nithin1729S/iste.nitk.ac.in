import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const YearCard = ({ title, link, score, disabled, year,yearPassed }) => {

  const PassedCard = (
    <Link to={ `${link}` }>
    <Card passed className="card center-align" >
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
          <hr/>
        </div>
        <div>
        {
          year===1 ? <Diamond/> : year===4 ? <Triangle /> : year===2 ? <Circle /> : <Rectangle/> 
        }
        </div>
        <div className='row valign-wrapper' style={{marginTop: "150px"}}>
          <div className='col s6'><h5>Score: { score }</h5></div>
          { yearPassed >= year  ? <div className='col s6 '><h6>Passed</h6></div> : "" }
        </div>
      </div>
    </Card>
  </Link>
  );
  const DisabledCard = (
    <>
    <Card disabled={true} className="card">
      <i className="large material-icons">lock_outline</i>
      <div className="card-content" style={{filter: "blur(2px)"}}>
        <div className="card-title">
          <h3>{title}</h3>
          <hr/>
        </div>
        <div>
        {
          year===1 ? <Diamond/> : year===4 ? <Triangle /> : year===2 ? <Circle /> : <Rectangle/> 
        }
        </div>
        <div className='row valign-wrapper' style={{marginTop: "150px"}}>
          <div className='col s6'><h5>Score: </h5></div>
        </div>
      </div>
    </Card>
    </>
  );

  return (
    <div className="col s6"> 
        {disabled ? DisabledCard : PassedCard}
    </div>
  );
};

const Card = styled.div`
  min-width: 250px;
  height: 380px;
  width: 100%;
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
  hr{
    background-color: #12a389 !important;
    box-shadow: 9px 4px 32px 0px #12a389;
    border-color: #12a389;
    height: 1px;
  }
  i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    border-radius: 50%;
    color: #ffffff;
    background-color: #262626;
    padding: 5px;
  }
`
const Triangle = styled.div`
  margin-top: -75px;
  width: 200px;
  height: 200px;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 16px 10px -17px #e83e7d;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after{
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #e83e7d;
    transform: rotate(45deg);
    top: 150px;
    left: 50px;
    box-shadow: -1px -1px 10px -2px #e83e7d;
  }
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e83e7d;
  box-shadow: 0px 0px 15px #e83e7d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Rectangle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e83e7d;
  box-shadow: 0px 0px 15px #e83e7d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Diamond = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e83e7d;
  box-shadow: 0px 0px 15px #e83e7d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(45deg) rotateZ(45deg);
`

export default YearCard;