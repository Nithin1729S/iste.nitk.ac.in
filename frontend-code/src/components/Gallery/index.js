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
        console.log('Fetching...');

        baseRequest.get('/gallery/event/').then(res => {
            console.log(res.data.images);
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

                    {
                        this.state.eventData.length === 0 ?
                            null :
                            this.state.eventData.map((eventData, index) => {
                                const { event, imageLinks } = eventData
                                return (
                                    <CarouselContainer className="row" key={ index }>
                                        <div className="col s6 push-s3">
                                            <EventCarousel
                                                eventName={ event }
                                                links={ imageLinks }
                                            />
                                        </div>
                                    </CarouselContainer>
                                )
                            })
                    }

                </Suspense>
            </div>
        );
    }
}

const CarouselContainer = styled.div`
    margin : 65px 0 50px 0; 
`



export default GalleryComponent;
