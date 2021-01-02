import React from 'react';
import axios from 'axios';
import CoreImage from './CoreImage/CoreImage';

import SigCards from './SigCards';
import TheNumbers from './TheNumbers';

class HomeComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            homeData: [],
        };
        this.fetchHome = this.fetchHome.bind(this)
    }
    async fetchHome() {
        console.log("Fetching. . .")
        await axios.get('http://127.0.0.1:8000/home/')
            .then(res => {
                this.setState({
                    homeData: res.data,
                });
                console.log(this.state.homeData);
            })
    }

    componentDidMount(){
        this.fetchHome();
    }

    render(){
        if (this.state.homeData.length!==0) {
            
            return (
                <div>
                
                <SigCards cardList={this.state.homeData.sigs}/>
                <TheNumbers stats={this.state.homeData.stats}/>
                
                <CoreImage core={this.state.homeData.core} aux_core={this.state.homeData.aux_core} />
            </div>
                
            );
        }
        else {
            return <div></div>
        }
        
    }
}
export default HomeComponent;
