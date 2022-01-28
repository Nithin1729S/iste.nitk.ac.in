import { useState, useEffect } from "react";
import data from "./data.json";
import styled from "styled-components";

const Leaderboard = ({ setFooterVal }) => {
  useEffect(() => setFooterVal("obscura"))
  const [resultData, setResultData] = useState(null);
  useEffect(() => {
    setResultData(data);
  }, []);
  return (
    <LeaderboardContainer>
      <Heading>Leaderboard</Heading>
      <Results>
        <ResultHeader>
          <div className="rank">Rank</div>
          <div className="name">Name</div>
          <div className="year">Year</div>
          <div className="score">Score</div>
        </ResultHeader>
        {resultData &&
          resultData.map((result, index) => (
            <Result
              rank={index + 1}
              key={index}
              name={result.name}
              score={result.score}
              year={result.year}
            />
          ))}
      </Results>
    </LeaderboardContainer>
  );
};

const Result = ({ name, rank, score, year }) => {
  const yearSuffix = (year) => {
    switch (year) {
      case "1":
        return "1st";
      case "2":
        return "2nd";
      case "3":
        return "3rd";
      case "4":
        return "4th";
      default:
        return "Invalid";
    }
  };
  return (
    <StyledResult year={year}>
      <div className="rank">{rank}</div>
      <div className="name">{name}</div>
      <div className="year">{yearSuffix(year)}</div>
      <div className="score">{score}</div>
    </StyledResult>
  );
};

// function that returns background colour on basis of year
const bgColorForResultElement = (year) => {
  switch (year) {
    case "1":
      return "#B1FFFD";
    case "2":
      return "#FDD2BF";
    case "3":
      return "#FFF1AF";
    case "4":
      return "#F9E4C8";
    default:
      return "#DADDFC";
  }
};
const LeaderboardContainer = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Heading = styled.h1`
  margin-bottom: 48px;
  font-size: 32px;
  text-align: center;
`;
const Results = styled.div`
  width: 100%;
`;
const StyledResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 60px;
  margin: 8px 0px;
  border-radius: 8px;
  background-color: ${(props) => bgColorForResultElement(props.year)};
  color: black;
  padding: 4px 16px;
  font-size: 18px;
  .rank {
    height: 100%;
    width: 48px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    border-radius: 30%;
  }
  .name,
  .year,
  .score {
    width: 25%;
    margin: 0px 8px;
  }
`;
const ResultHeader = styled(StyledResult)`
  background-color: #acc7fc;
  background-color: transparent;
  border-bottom: 2px solid grey;
  border-radius: 0px;
  .name,
  .year,
  .score,
  .rank {
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
  }
`;
export default Leaderboard;
