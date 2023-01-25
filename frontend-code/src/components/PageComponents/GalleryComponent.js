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
        caption: "The Best Crypt SIG Head",
        imageLink: "../logo.png",
        event: "Rahul OnlyFans"
      }
    ]
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

        <div className="card center" style={{width: '20vw', padding: 5}}>
          <figure>
            <AdvancedImage 
              style={{width: '15vw'}} 
              cldImg={new CloudinaryImage('sample', {cloudName: 'dlbqbd5pe'}).resize(fill().width(150).height(150))} 
            />
            <figcaption>{this.state.images[0].caption}</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default GalleryComponent;