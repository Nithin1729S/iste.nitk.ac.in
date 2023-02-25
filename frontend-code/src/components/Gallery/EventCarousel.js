import React from 'react'
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import './css/gallery-carousel.css';

const EventCarousel = ({ eventName, links }) => {
    return (
        <CarouselFrame>
            <Carousel className="eventCarousel" infiniteLoop dynamicHeight={ true }>
                { links.map((link) => {
                    return (
                        <CarouselImageContainer>
                            <img src={ link } alt={ eventName} loading = "lazy" />
                            <p className="legend">{eventName}</p>
                        </CarouselImageContainer>
                    )
                })}
            </Carousel>
            
        </CarouselFrame>
    )
}


const CarouselImageContainer = styled.div`
    img {
        height : auto;
        max-width : 100%;
    }
`

const CarouselFrame = styled.div`
    padding : 20px;
    background:
        linear-gradient(to right, #708090 4px, transparent 4px) 0 0,
        linear-gradient(to right, #708090 4px, transparent 4px) 0 100%,
        linear-gradient(to left, #708090 4px, transparent 4px) 100% 0,
        linear-gradient(to left, #708090 4px, transparent 4px) 100% 100%,
        linear-gradient(to bottom, #708090 4px, transparent 4px) 0 0,
        linear-gradient(to bottom, #708090 4px, transparent 4px) 100% 0,
        linear-gradient(to top, #708090 4px, transparent 4px) 0 100%,
        linear-gradient(to top, #708090 4px, transparent 4px) 100% 100%;

        background-repeat: no-repeat;
        background-size: 60px 60px;

`

export default EventCarousel