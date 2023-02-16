import React, { Suspense } from 'react';
import { baseRequest } from '../../constants';



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
        images: [
            {
                "event": "tested",
                "imageLinks": [
                    'https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586733/Gallery/pics_2022/To_be_honest_kcq7tv.png',
                    'https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586732/Gallery/pics_2022/Obscura_mlbhy5.png'
                ]            
            },
            {
                "event": "default",
                "imageLinks": [
                    "https://res.cloudinary.com/dmxcn1knn/image/upload/v1675444601/Gallery/Blueprint.png"
                ]
            }
        ],
        events: ["tested", "default"]
    };

    componentDidMount() {
        console.log('Fetching...');

        baseRequest.get('/gallery/event/').then(res => {
            console.log(res.data.images);
            this.setState({
                // images: [...this.state.images, ...res.data.images],
                events : res.data.images
            });
        });
    }
    Loading() { 
        return <h2>🌀 Loading...</h2>;
    }

    getImageArray(eventData) {
        console.log(eventData)
        console.log(eventData.imageLinks)
        let imageLinks = eventData.imageLinks
        console.log(imageLinks.length)
        for (const imageLink of imageLinks) {
            console.log(imageLink)
        }
        // for (let image of eventData.imageLinks) {
        //     console.log(image);
        //     let cards = [];
        //     cards.push(
        //         <div className='image-box'>
        //             <img src={ image } alt={ eventData.event } loading="lazy" />
        //         </div>
        //     );
        //     // for (let link of image.imageLinks) {
        //     // }
        //     return cards;
        //     // if (image.event === event) {
        //     // }
        // }
        return [];
    }
    render() {
        // let res = []
        // for (let event of this.state.events) {
        //     console.log(event)
        //     res.push(
        //         <div className="row">
        //             <div className="col s6 push-s3 main-box">
        //                 <Carousel infiniteLoop dynamicHeight={ true }>
        //                     { this.getImageArray(event) }
        //                 </Carousel>
        //                 <span>{event}</span>
        //             </div>
        //         </div>
        //     );
        // }

        return (
            <div>
                <DataHeader header="Gallery" />
                <Suspense fallback={ <this.Loading /> }>
                    {
                        this.state.eventData.length === 0 ?
                            null :
                            this.state.eventData.map((index, eventData) => {
                                const {event,imageLinks} = eventData
                                return (
                                        <div className="row" key={index}>
                                            <div className="col s6 push-s3 main-box">
                                                <EventCarousel 
                                                    eventName={ event }
                                                    links = {imageLinks}
                                                />
                                                <span>{event}</span>
                                            </div>
                                        </div>
                                )
                        })   
                    }
                </Suspense>
            </div>
        );
    }
}

export default GalleryComponent;
