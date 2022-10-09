import React from 'react';
import PropTypes from 'prop-types';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants';
import Walls from './Walls';
import './style.css';
// import '../mapbg.png'

export default function Board(props) {
    const { gridSize } = props;

    const boardWidth = gridSize * BOARD_WIDTH;
    const boardHeight = gridSize * BOARD_HEIGHT;

    return (
        <div className="pacman-board">
            {/* <img src='./mapbg.png' width={20} height={30}></img> */}
            <svg width={boardWidth*3} height={boardHeight}>
                
                <rect x={0} y={0} width={boardWidth*10} height={boardHeight*10} fill="#000" />
                <Walls {...props} />
            </svg>
        </div>
    );
}

Board.propTypes = {
    gridSize: PropTypes.number.isRequired
};

