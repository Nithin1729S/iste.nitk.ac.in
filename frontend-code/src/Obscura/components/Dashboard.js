import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YearCard from './YearCard'
import styled from 'styled-components'
import obscurabannerv2 from '../constants/obscurabannerv2.png'


class Dashboard extends Component {
  state = {
    userName : "",
    yearPassed: 0,
    scores : [] 
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userInfo'))
    //console.log(data)
    this.props.setFooterVal("obscura")  // the footer can be edited at css/footer.css
    // fetch this data from the localStorage or make API request to fetch it
    this.setState({
      userName : data.userName,
      yearPassed: data.yearPassed,
      scores : data.scores
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Container>
          <Name>Hello { this.state.userName } </Name>
          
          <Link to="/obscura/leaderboard">Leaderboard</Link>
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

}



const Container = styled.div`
  padding : 100px;
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${obscurabannerv2});
  background-size: cover;
  overflow-x: hidden;
  margin-top: -64px;
  background-size: cover;
`;

const Name = styled.h1`
  color : #fff !important;
`;
export default Dashboard;
