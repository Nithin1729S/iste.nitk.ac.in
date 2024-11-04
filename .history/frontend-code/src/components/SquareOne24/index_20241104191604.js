import React from 'react';
import './SquareOne24.css'; // Import the CSS file for styling

class SquareOne24 extends React.Component {
  render() {
    return (
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">ISTE SquareOne '25 Leaderboard</h1>
        <div className="leaderboard-frame-container">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUu6oHVC_1A3oKeJ3v-slvCEsZv4v3KXtKoB0jZEHlLykKsU4fm87aSfX_m-YhN-fFc2JJr4jdv9wS/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            className="leaderboard-frame"
            title="Leaderboard"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default SquareOne24;
