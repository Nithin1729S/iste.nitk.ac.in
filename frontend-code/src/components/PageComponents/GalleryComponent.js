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

  
  renderCards() {
    const imageStyle = {
      width: "20vw",
      // height: "45vw",
    }

    return (
      <div className="row">
        {this.state.images.map(image => {
          return (
            <div className="col">
              <div className="card center" style={{width: '45vw', padding: 5}}>
                <figure>
                  <img src={image.imageLink} alt={image.caption} style={imageStyle} />
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
      console.log(res);
      this.setState({
          images: [...res.data.images],
      }); 
    }).then(() => {
      console.log(this.state.images);
    });
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