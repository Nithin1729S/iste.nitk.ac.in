import React from 'react';
import axios from 'axios';
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
    fetchHome() {
        console.log("Fetching. . .")
        axios.get('http://127.0.0.1:8000/home/')
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
        return(
            <div>
                {
                    this.state.homeData.sigs && <SigCards cardList={this.state.homeData.sigs}/>
                }
                {
                    this.state.homeData.stats && <TheNumbers stats={this.state.homeData.stats}/>
                }
            </div>
        );
    }
}
export default HomeComponent;
