import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

// import '../css/recsLandingPage.css';

const Question = (data) => {
  const [expanded, setExpanded] = useState(false)
    console.log(data.question);
  return (
    <div className="container">
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {data.question}
          <i  style={{float: "right"}} onClick={() => setExpanded(!expanded)}>
              {expanded ? <FaArrowUp />: <FaArrowDown />}
            </i>
        </h4>
      </header>
      {expanded && <h5 style= {{color: '#1a237e'}, {fontSize: '2em'}, {fontWeight: "lighter"}}>{data.answer}</h5>}
    </div>
  )
}

export default Question