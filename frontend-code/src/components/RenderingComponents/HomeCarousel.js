import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import "../../css/carousel.css";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 300,
      numVisible: 3,
    });
    let instance = M.Carousel.getInstance(
      document.getElementById("desktop-carousel")
    );
    setInterval(function () {
      instance.next();
    }, 3500);
  }
  render() {
    return (
      <div>
        <div className="carousel carousel-slider slides" id="desktop-carousel">
          {this.props.photosList.map((item, index) => {
            return (
              <a key={index} className="carousel-item" href="#">
                <img
                  className="carousel_images"
                  alt={item.name}
                  src={"http://127.0.0.1:8000/media/".concat(item.url)}
                ></img>
              </a>
            );
          })}
        </div>
        <div className="carousel carousel-slider slides" id="mobile-carousel">
          {this.props.photosList.map((item, index) => {
            return (
              <a key={index} className="carousel-item" href="#">
                <img
                  className="carousel_images"
                  alt={item.name}
                  src={"http://127.0.0.1:8000/media/".concat(item.url)}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeCarousel;
