import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Card.module.css";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.name}>{this.props.name}</h1>
          <hr />
          <p className={styles.description}>{this.props.para1}</p>
          <p className={styles.description}>{this.props.para2}</p>
          <p className={styles.description}>{this.props.para3}</p>
          <p className={styles.description}>{this.props.para4}</p>
          <button className={styles.button}><Link to={this.props.link}>Read More</Link></button>
        </div>
      </>
    );
  }
}

export default Card;
