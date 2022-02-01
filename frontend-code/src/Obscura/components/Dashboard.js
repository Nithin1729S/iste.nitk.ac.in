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
          {/* <Link to="/obscura/leaderboard">Leaderboard</Link> */}
            <div className="row mt-3">
              {/* year 1 card is never disabled  */}
              <div className='col l3 m6 s12'>
              <YearCard
                title="Year 1"
                link="/obscura/year1"
                score={this.state.scores[0]}
                year={1}
              />
              </div>
              <div className='col l3 m6 s12'>
              { this.state.yearPassed >= 2 ? 
                <YearCard
                  title="Year 2"
                  link="/obscura/year2"
                  score= {this.state.scores[1]}
                  year={2}
                /> :
                <YearCard
                  title="Year 2"
                  link="/obscura/dashboard"
                  disabled={true}
                  year={2}
                /> 
              }
              </div>
              <div className='col l3 m6 s12'>
              { this.state.yearPassed >= 3 ? 
                <YearCard
                  title="Year 3"
                  link="/obscura/year3"
                  score= {this.state.scores[2]}
                  year={3}
                /> : 
                <YearCard
                  title="Year 3"
                  link="/obscura/dashboard"
                  disabled= {true}
                  year={3}
                />
              }
              </div>
              <div className='col l3 m6 s12'>
              { this.state.yearPassed === 4 ? 
                <YearCard
                  title="Year 4"
                  link="/obscura/year4"
                  score= {this.state.scores[3]}
                  year={4}
                /> : 
                <YearCard
                  title="Year 4"
                  link="/obscura/dashboard"
                  disabled = {true}
                  year={4}
                />
              }
              </div>
            </div>
            <Link to="/obscura/leaderboard">
              <StyledButton className='btn btn-large'>
                <i className="large material-icons" style={{marginLeft: "-40px", marginTop: "-25px"}}>star</i>
                Leaderboard
              </StyledButton>
            </Link>
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

const StyledButton = styled.button`
  background-color: #12a389 !important;
  font: Roboto;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 500;
  i{
    position: absolute;
    color: #FFD700;
    text-shadow: 0px 0px 15px #FFD700;
  }
`
export default Dashboard;
