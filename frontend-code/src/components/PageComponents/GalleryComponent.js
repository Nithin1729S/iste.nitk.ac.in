import React from "react";
import { baseRequest } from "../../constants";
// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


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
      {
        caption: "This is a test",
        imageLink: "../logo.png",
        event: "Rahul OnlyFans"
      },
      {
        caption: "This is a test"
      },
      {
        caption: "This is a test"
      },
      {
        caption: "This is a test"
      },
      {
        caption: "This is a test"
      },
      {
        caption: "This is a test"
      },{
        caption: "This is a test"
      },{
        caption: "This is a test"
      },{
        caption: "This is a test"
      },{
        caption: "This is a test"
      },{
        caption: "This is a test"
      },{
        caption: "This is a test"
      }
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
                  <AdvancedImage 
                    style={{width: '30vw'}} 
                    cldImg={new CloudinaryImage('sample', {cloudName: 'dlbqbd5pe'}).resize(fill().width(150).height(150))} 
                  />
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
    
    // baseRequest.get("/gallery/").then((res) => {
    //   this.setState({
    //       images: [...this.state.images, ...res.images],
    //   });
    // });
    // this.initialize();
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