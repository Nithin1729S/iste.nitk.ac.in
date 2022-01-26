import React, { Component } from 'react';
import { FlexContainerCentered as Container } from '../../components/UI/FlexContainers';
import YearCard from './YearCard'


class Dashboard extends Component {
  render() {
    return (
      <>
        <Container isColumn>
          <h1>Hello name </h1>
          <div className="container">
            <div className="row">
              <div className="col s6">
                <YearCard
                  title="Year 1"
                  link="/obscura/year1"
                  score="10000"
                />
              </div>
              <div className="col s6">
                <YearCard
                  title="Year 2"
                  link="/obscura/year2"
                  score="10000"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <YearCard
                  title="Year 3"
                  link="/obscura/year3"
                  score="10000"
                />
              </div>
              <div className="col s6">
                <YearCard
                  title="Year 4"
                  link="/obscura/year4"
                  score="10000"
                />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Dashboard;
