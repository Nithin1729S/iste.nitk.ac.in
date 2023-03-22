import React from "react";
import { baseRequest } from "../../constants";

class Question extends React.Component {
  state = { eventData: ""}

  componentDidMount() {
    baseRequest.get('/clutchMysteryBox/q1').then(res => {
      this.setState({
          eventData: res
      });
  });
  }

  render() {
    return (
      <>
      <h1>Clutch Mystery Box</h1>
      {this.state.eventData}
      </>
    );
  }
}

export default Question;