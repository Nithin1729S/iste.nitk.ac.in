import React from "react";
import { baseRequest } from "../../constants";

const DataHeader = (props) => {
  return (
      <div>
          <div className="col l12 s12">
              <h3>
                  {props.header}
              </h3>
          </div>
      </div>
  );
};

class GalleryComponent extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    console.log("Fetching...");
    baseRequest.get("/gallery/").then((res) => {
      this.setState({
          images: [...this.state.images, ...res.images],
      });
    });
  }

  render() {
    return (
      <>
        <DataHeader header="Gallery" />
      </>
    );
  }
}

export default GalleryComponent;