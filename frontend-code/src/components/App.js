import React from "react";
import {Router, Route} from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Footer from './Footer';
import HomeComponent from './HomeComponent';
import EventComponent from './EventComponent';
import SigComponent from './SigComponent';
import TeamComponent from './TeamComponent';
import ProjectComponent from './ProjectComponent';
import '../css/constants.css';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Header/>
                <main>
                    <Route path='/' exact component={HomeComponent}/>
                    <Route path='/event' exact component ={EventComponent}/>
                    <Route path='/sig' exact component={SigComponent}/>
                    <Route path='/team' exact component={TeamComponent}/>
<<<<<<< HEAD
                 </main>
=======
                    <Route path='/project' exact component={ProjectComponent}/>
                </div>
>>>>>>> 1f709e4c6e8bc2963de345a1a2e2285741a52b5a
                <Footer/>
            </Router>
        );
    }
}
export default App;
