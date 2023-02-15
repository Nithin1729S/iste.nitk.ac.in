import React, { Suspense } from 'react';
import { baseRequest } from '../../constants';

import { Carousel } from 'react-responsive-carousel';
import './constants/gallery-carousel.css';

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

        baseRequest.get('/gallery/').then(res => {
            console.log(res);
            this.setState({
                // images: [...this.state.images, ...res.data.images],
            });
        });
    }
    Loading() { 
        return <h2>🌀 Loading...</h2>;
    }

    getImageArray(event) {
        for (let image of this.state.images) {
            console.log(image);
            if (image.event === event) {
                let cards = [];
                for (let link of image.imageLinks) {
                    cards.push(
                        <div>
                            <img src={ link } alt={ image.event } loading="lazy" />
                        </div>
                    );
                }
                return cards;
            }
        }
        return [];
    }
    render() {
        let res = []
        for (let event of this.state.events) {
            res.push(
                <div className="row">
                    <div className="col s6 push-s3">
                        <Carousel infiniteLoop dynamicHeight={ true }>
                            { this.getImageArray(event) }
                        </Carousel>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <DataHeader header="Gallery" />
                <Suspense fallback={ <this.Loading /> }>
                    { res }
                </Suspense>
            </div>
        );
    }
}

export default GalleryComponent;
