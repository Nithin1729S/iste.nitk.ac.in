import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import "../../css/carousel.css";
import { baseUrl } from "../../constants";

class HomeCarousel extends React.Component {
    state = {};
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
        const carouselContent = this.props.photosList.map((item, index) => {
            return (
                <a key={index} className="carousel-item" href="#">
                    <img
                        className="carousel_images"
                        alt={item.name}
                        src={`${baseUrl}/media/`.concat(item.url)}
                    ></img>
                </a>
            );
        });
        return (
            <div>
                <div
                    className="carousel carousel-slider slides"
                    id="desktop-carousel"
                >
                    {carouselContent}
                </div>
                <div
                    className="carousel carousel-slider slides"
                    id="mobile-carousel"
                >
                    {carouselContent}
                </div>
            </div>
        );
    }
}

export default HomeCarousel;
