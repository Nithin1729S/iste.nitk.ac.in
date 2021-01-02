import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import CoreImage from './CoreImage/CoreImage';

=======
import SigCards from './SigCards';
import TheNumbers from './TheNumbers';
>>>>>>> 1f709e4c6e8bc2963de345a1a2e2285741a52b5a

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
<<<<<<< HEAD
        if (this.state.homeData.length!==0) {
            
            return (
                <CoreImage core={this.state.homeData.core} aux_core={this.state.homeData.aux_core} />
            );
        }
        else {
            return <div></div>
        }
=======
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
>>>>>>> 1f709e4c6e8bc2963de345a1a2e2285741a52b5a
    }
}
export default HomeComponent;
