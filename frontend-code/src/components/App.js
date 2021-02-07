import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Header from "./RenderingComponents/Header";
import Footer from "./RenderingComponents/Footer";
import HomeComponent from "./PageComponents/HomeComponent";
import EventComponent from "./PageComponents/EventComponent";
import SigComponent from "./PageComponents/SigComponent";
import TeamComponent from "./PageComponents/TeamComponent";
import ProjectComponent from "./PageComponents/ProjectComponent";
import "../css/constants.css";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/event" exact component={EventComponent} />
          <Route path="/sig/:name" exact component={SigComponent} />
          <Route path="/team" exact component={TeamComponent} />
          <Route path="/project/:id" exact component={ProjectComponent} />
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
