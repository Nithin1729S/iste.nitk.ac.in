import React from 'react';

//import Header from "./Components/Header";
import Playground from "./Components/Playground";

class Alphabet extends React.Component {
    render() {
        return (
            <>
                {/* <Header/> */}
                <Playground
                    changeScore={ this.props.changeScore } 
                    gameOver={this.props.gameOver}
                />
            </>
        );
    }
};

export default Alphabet;
