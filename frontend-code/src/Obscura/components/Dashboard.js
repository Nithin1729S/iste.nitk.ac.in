import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FlexContainerCentered as Container } from '../../components/UI/FlexContainers';


class Dashboard extends Component {
  render() {
      return (
        <Container isColumn>
            <h1>Name Year Score</h1>
            <div className="row">
              <div className="card" style={{width:"300px"}}>
                <div className="card-content">
                    <h2 className="card-title">Year 1</h2>
                    <h5>Score</h5>
                </div>
                <div className="card-action">
                    <Link to='/obscura/year1'> <button className="btn btn-primary"> Enter </button></Link>
                </div>
              </div>
            
            </div>
            <div className="row">
              <div className="card" style={{width:"300px"}}>
                <div className="card-content">
                    <h2 className="card-title">Year 2</h2>
                    <h5>Score</h5>
                </div>
                <div className="card-action">
                    <Link to='/obscura/year2'> <button className="btn btn-primary"> Enter </button></Link>
                </div>
              </div>
            
            </div>
            <div className="row">
              <div className="card" style={{width:"300px"}}>
                <div className="card-content">
                    <h2 className="card-title">Year 3</h2>
                    <h5>Score</h5>
                </div>
                <div className="card-action">
                    <Link to='/obscura/year3'> <button className="btn btn-primary"> Enter </button></Link>
                </div>
              </div>
            
            </div>
            <div className="row">
              <div className="card" style={{width:"300px"}}>
                <div className="card-content">
                    <h2 className="card-title">Year 4</h2>
                    <h5>Score</h5>
                </div>
                <div className="card-action">
                    <Link to='/obscura/year4'> <button className="btn btn-primary"> Enter </button></Link>
                </div>
              </div>
            
            </div>
        </Container>
    );
  }
}

export default Dashboard;
