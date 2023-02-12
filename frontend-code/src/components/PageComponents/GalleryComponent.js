import React from "react";
import { baseRequest } from "../../constants";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const DataHeader = (props) => {
  return (
    <div className="col l12 s12">
      <h3>{props.header}</h3>
    </div>
  );
};

class GalleryComponent extends React.Component {
  state = {
    images: [
      {
        "imageLink": "https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586733/Gallery/pics_2022/To_be_honest_kcq7tv.png"
      },
      {
        "imageLink": "https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586732/Gallery/pics_2022/Obscura_mlbhy5.png"
      }
    ]
  }

  componentDidMount() {
    console.log("Fetching...");
    
    baseRequest.get("/gallery/").then((res) => {
      console.log(res);
      this.setState({
          images: [...this.state.images, ...res.data.images],
      }); 
    });
  } 

  render() {
    let cards = []
    for (let image of this.state.images) {
      cards.push(
        <div>
          {/* <div className="card">
            <div className="card-image waves-block waves-light">
              <img className="activator responsive_img" src={image.imageLink} alt={image.caption} />
            </div>
            <div className="card-reveal" style={{opacity: 0.8}}>
              <span className="card-title grey-text text-darken-4">
              <i class="material-icons right">close</i><br/>{image.caption}
              </span>
            </div>
          </div> */}
          <img src={image.imageLink} alt={image.caption} />
          <p>{image.event}</p>
        </div>
      );
    }

    return (
      <div>
        <DataHeader header="Gallery" />

        <div className="row">
          <div className="col s6 push-s3">
            <Carousel infiniteLoop dynamicHeight={true}>
              {cards} 
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryComponent;