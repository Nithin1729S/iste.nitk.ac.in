import React from "react";
import DescContent from "./DescContent";

class DescPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sigName: "catalyst",
      id: 1,
    };
  }

  render() {
    return (
      <div>
        <div>Header</div>
        <DescContent
          sn = {this.state.sigName}
          id = {this.state.id}
        />
        <div>Footer</div>
      </div>
    );
  }
}
export default DescPage;
