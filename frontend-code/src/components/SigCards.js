import React from 'react';
import Card from './cards';
import '../css/constants.css';


const SigCards = (props) => {

    
    const renderedList = props.cardList.map(function(item) {
        return <Card name={item.name} avatar={"http://127.0.0.1:8000"+item.avatar} summary={item.summary} />
    });

    return (
        <div className='container sigCard'>
            <h3 className="center-align">
                <span className='animatedLine viewed'>
                Special Interest Groups
                (SIGs)
                </span>
                </h3>
            <div className='row' >
                {renderedList}
            </div>
        </div>
    );

}

export default SigCards;
