import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './style.css';

export default function Scores({ score, lost,changeScore,gameOver }) {
    let rendergameOver = null;

    
    rendergameOver = (
        <GameOverContainer>
            
            <h6>Score : { score }</h6>
            <Button
                onClick={ () => {
                    changeScore(score);
                    setTimeout(() =>
                        gameOver(),500
                    )
                } }>
                Go to Dashboard
            </Button>
        </GameOverContainer>
    );
    

    return (
        <div className="pacman-scores">
            <span className="running-score">
                {'Score: '}{score}
            </span>
            { rendergameOver }
        </div>
    );
}

Scores.propTypes = {
    lost: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired
};

const GameOverContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content : space-between;
    margin : 100px 0 0 200px;
`

const Button = styled.button`
    width: 60%;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    color : #fff;
    margin : 10px;
    border : 0;
    cursor: pointer;
    text-align:center;
    background-color: #e83e7d;
    border-radius: 5px;
`


