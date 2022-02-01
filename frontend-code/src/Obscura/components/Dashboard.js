import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import YearCard from './YearCard'
import styled from 'styled-components'
import obscurabannerv2 from '../constants/obscurabannerv2.png'
import { baseRequest } from '../../constants';


class Dashboard extends Component {
  state = {
    userName : "",
    yearPassed: 1,
    scores: [],
    totalScore : 0,
  }
  componentDidMount() {
    this.props.setFooterVal("obscura")
    const { username } = JSON.parse(localStorage.getItem("userInfo"))
    baseRequest.get('/obscura/user/',
    {
      params:
      {
        username: username
      }
    })
    .then((res) => {
        const {username,yearPassed,total_score,scores} = res.data
        const yearScores = [];
        for (let i in scores[0]) {
          yearScores.push(scores[0][i])
        }
        this.setState({
          userName :username,
          yearPassed:yearPassed,
          scores: yearScores,
          totalScore :total_score
        })
        localStorage.setItem("userInfo", JSON.stringify({username:username,yearPassed:yearPassed}))
    })
  }
  
  render() {
    return (
      <>
        <Container>
          <Name>Hello { this.state.userName } </Name>
            <div className="row mt-3">
              <div className='col l3 m6 s12'>
              <YearCard
                title="Year 1"
                link="/obscura/year1"
                score={this.state.scores[0]}
                year={ 1 }
                yearPassed={ this.state.yearPassed}
              />
              </div>
              <div className='col l3 m6 s12'>
              { this.state.yearPassed >= 1 ? 
                <YearCard
                  title="Year 2"
                  link="/obscura/year2"
                  score= {this.state.scores[1]}
                  year={ 2 }
                  yearPassed={ this.state.yearPassed}
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
              { this.state.yearPassed >= 2 ? 
                <YearCard
                  title="Year 3"
                  link="/obscura/year3"
                  score= {this.state.scores[2]}
                  year={3}
                  yearPassed={ this.state.yearPassed}
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
              { this.state.yearPassed >=3 ? 
                <YearCard
                  title="Year 4"
                  link="/obscura/year4"
                  score= {this.state.scores[3]}
                  year={ 4 }
                  yearPassed={ this.state.yearPassed}
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
  &:hover{
    background-color: #12a389 !important;
  }
`
export default Dashboard;