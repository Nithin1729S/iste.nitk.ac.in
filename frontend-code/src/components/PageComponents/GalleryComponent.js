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
    images: [
    ]
  }

  renderCards() {
    return (
      <div className="row">
        {this.state.images.map(image => {
          return (
            <div className="col">
              <div className="card center" style={{width: '45vw', padding: 5}}>
                <figure>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log("Fetching...");
    
    baseRequest.get("/gallery/").then((res) => {
      this.setState({
          images: [...this.state.images, ...res.images],
      });
    });
    this.initialize();
  } 

  render() {
    return (
      <div className="container">
        <DataHeader header="Gallery" />

        {this.renderCards()}
      </div>
    );
  }
}

export default GalleryComponent;