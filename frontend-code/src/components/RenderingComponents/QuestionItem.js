import React from "react";
import styles from "../../css/QuestionItem.module.css";

class QuestionItem extends React.Component {
  anyname=()=>{console.log("anystring")};
  render() {
    const {
      questionId,
      status,
      Title,
      description,
      points,
      url,
      hint1Url,
      hint2Url,
    } = this.props.item;
    return (
      <div onClick={this.anyname} className={`${styles.box} ${status?styles.attempted:null}`}>
        <h3>{Title}</h3>
        <h5>{points}</h5>
      </div>
    );
  }
}
export default QuestionItem;
