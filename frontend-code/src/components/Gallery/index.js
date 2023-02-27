import React, { Suspense } from 'react';
import { baseRequest } from '../../constants';

import styled from 'styled-components'

import EventCarousel from './EventCarousel';

const DataHeader = props => {
    return (
        <div className="col l12 s12">
            <h3>{ props.header }</h3>
        </div>
    );
};

class GalleryComponent extends React.Component {
    state = {
        eventData: []
    };

    componentDidMount() {
        baseRequest.get('/gallery/event/').then(res => {
            this.setState({
                eventData: res.data.images
            });
        });
    }
    Loading() {
        return <h2>🌀 Loading...</h2>;
    }
    render() {
        return (
            <div>
                <DataHeader header="Gallery" />
                <Suspense fallback={ <this.Loading /> }>
                <CarouselTopContainer>
                    {
                        this.state.eventData.length === 0 ?
                            null :
                            this.state.eventData.map((eventData, index) => {
                                const { event, imageLinks } = eventData
                                return (
                                    <CarouselContainer key={ index }>
                                        <div>
                                            <EventCarousel
                                                eventName={ event }
                                                links={ imageLinks }
                                            />
                                        </div>
                                    </CarouselContainer>
                                )
                            })
                    }
                </CarouselTopContainer>        
                </Suspense>
            </div>
        );
    }
}

const CarouselTopContainer = styled.div`
    display : flex;
    flex-direction : column;
    max-width :90vw;
    width : 60%;
    justify-content : center;
    align-items : center;
    margin : auto;
    @media (max-width : 500px) {
        width : 80%;
    }
`

const CarouselContainer = styled.div`
    margin : 65px 0 50px 0; 
`



export default GalleryComponent;
