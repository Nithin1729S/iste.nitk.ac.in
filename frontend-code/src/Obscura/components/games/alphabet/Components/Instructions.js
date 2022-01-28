import React from "react";
import styles from "../Styles/Instructions.module.css";

const Instructions = (props) => {
  return (
    <div className={styles.box}>
      <div className={`center-align ${styles.heading}`}>Instructions</div>

      <div className={styles.points}>
        <ul>
          <li>In this game, words will drop from the top of the screen.</li>
          <li>
            {" "}
            You need to type them before they fall down in order to save them.
            It is case insensitive.{" "}
          </li>
          <li> For each word you save, your score will increase by 10 </li>
          <li> For every missed or incorrect word, you lose one life </li>
          <li> The words are common places in and around our campus</li>
          <li> Enjoy :) </li>
        </ul>
      </div>
      <div className="row center">
        <button
          className={`center-align ${styles.play}`}
          onClick={() => props.startGame()}
        >
          Play!
        </button>
      </div>
    </div>
  );
};

export default Instructions;
