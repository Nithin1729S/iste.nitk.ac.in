import React from "react";
import { Route, HashRouter } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./RenderingComponents/Header";
import Footer from "./RenderingComponents/Footer";
import HomeComponent from "./PageComponents/HomeComponent";
import EventComponent from "./PageComponents/EventComponent";
import SigComponent from "./PageComponents/SigComponent";
import TeamComponent from "./PageComponents/TeamComponent";
import ProjectComponent from "./PageComponents/ProjectComponent";
import LoginComponent from "./PageComponents/LoginComponent";
import EventDetails from "./PageComponents/EventDetails";
import EventAdd from "./PageComponents/EventAdd";
import ExpoHomeComponent from "../expo/Components/ExpoHomeComponent";
import DescPage from "../expo/Components/DescPage";

import "../css/constants.css";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <ScrollToTop />
                <Header />
                <div className="app-main">
                    <Route path="/expo" exact component={ExpoHomeComponent} />
                    <Route path="/expo/:id" exact component={DescPage} />
                    <Route path="/" exact component={HomeComponent} />
                    <Route path="/event" exact component={EventComponent} />
                    <Route path="/sig/:name" exact component={SigComponent} />
                    <Route path="/team" exact component={TeamComponent} />
                    <Route
                        path="/project/:id"
                        exact
                        component={ProjectComponent}
                    />
                    <Route path="/login" exact component={LoginComponent} />
                    <Route
                        path="/event/view/:name"
                        exact
                        component={EventDetails}
                    />
                    <Route path="/event/add" exact component={EventAdd} />
                </div>
                <Footer />
            </HashRouter>
        );
    }
}
export default App;
