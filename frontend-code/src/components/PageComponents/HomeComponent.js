import React from "react";
import axios from "axios";

import CoreImage from "../AggregatingComponents/CoreImage";
import HomeCarousel from "../RenderingComponents/HomeCarousel";
import SigCards from "../AggregatingComponents/SigCards";
import TheNumbers from "../AggregatingComponents/TheNumbers";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: [],
        };
        this.fetchHome = this.fetchHome.bind(this);
    }
    async fetchHome() {
        console.log("Fetching. . .");
        await axios.get("http://127.0.0.1:8000/home/").then((res) => {
            this.setState({
                homeData: res.data,
            });
        });
    }

    componentDidMount() {
        this.fetchHome();
    }

    render() {
        if (this.state.homeData.length !== 0) {
            return (
                <>
                    <HomeCarousel photosList={this.state.homeData.carousel} />
                    <SigCards cardList={this.state.homeData.sigs} />
                    <TheNumbers stats={this.state.homeData.stats} />
                    <CoreImage
                        core={this.state.homeData.core}
                        aux_core={this.state.homeData.aux_core}
                    />
                </>
            );
        } else {
            return <></>;
        }
    }
}
export default HomeComponent;
