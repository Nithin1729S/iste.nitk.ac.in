import React from "react";
import {Router, Route} from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Footer from './Footer';
import HomeComponent from './HomeComponent';
import EventComponent from './EventComponent';
import SigComponent from './SigComponent';
import TeamComponent from './TeamComponent';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Header/>
                <div>
                    <Route path='/' exact component={HomeComponent}/>
                    <Route path='/event' exact component ={EventComponent}/>
                    <Route path='/sig' exact component={SigComponent}/>
                    <Route path='/team' exact component={TeamComponent}/>
                </div>
                <Footer/>
            </Router>
        );
    }
}
export default App;