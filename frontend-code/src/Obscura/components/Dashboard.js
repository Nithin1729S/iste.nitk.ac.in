import React, { Component } from 'react';
import { FlexContainerCentered as Container } from '../../components/UI/FlexContainers';
import YearCard from './YearCard'


class Dashboard extends Component {
  state = {
    yearPassed: 0,
    scores : [] 
  }
  componentDidMount() {
    this.props.setFooterVal("crypt")
    // fetch this data from the localStorage or make API request to fetch it
    this.setState({
      yearPassed: 2, 
      scores : [1000,500,0,0]
    })
  }
  render() {
    return (
      <>
        <Container isColumn>
          <h1>Hello name </h1>
          
          <div className="container">
            <div className="row">
              {/* year 1 card is never disabled  */}
              <YearCard
                title="Year 1"
                link="/obscura/year1"
                score={this.state.scores[0]}
              />
              
              { this.state.yearPassed >= 2 ? 
                <YearCard
                  title="Year 2"
                  link="/obscura/year2"
                  score= {this.state.scores[1]}
                /> :

                <YearCard
                  title="Year 2"
                  link="/obscura/dashboard"
                  disabled={true}
                /> 
              }
            </div>
            <div className="row">
              { this.state.yearPassed >= 3 ? 
                <YearCard
                  title="Year 3"
                  link="/obscura/year3"
                  score= {this.state.scores[2]}
                /> : 
                <YearCard
                  title="Year 3"
                  link="/obscura/dashboard"
                  disabled= {true}
                />
              }
              { this.state.yearPassed === 4 ? 
                <YearCard
                  title="Year 4"
                  link="/obscura/year4"
                  score= {this.state.scores[3]}
                /> : 
                <YearCard
                  title="Year 4"
                  link="/obscura/dashboard"
                  disabled = {true}
                />
              }
              
            </div>
          </div>
        </Container>
      </>
    );
  }
  // componentWillUnmount() {
  //   this.props.setFooterVal("")
  // }
}

export default Dashboard;
