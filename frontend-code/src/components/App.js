import React from "react";
import { Route, HashRouter } from "react-router-dom";

import ScrollToTop from "./UtilityComponents/ScrollToTop";
import Wrapper from "./UtilityComponents/Wrapper";
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
import LeaderboardComponent from "./PageComponents/LeaderboardComponent";
import CTFComponent from "./PageComponents/CTFComponent";
import SGPComponent from "./PageComponents/SGPComponent";

import "../css/constants.css";

class App extends React.Component {
    state = { headerShouldRender: true };
    changeHeaderFooterStatus = (val) => {
        this.setState({ headerShouldRender: val });
    };
    render() {
        return (
            <HashRouter>
                <ScrollToTop />
                <Wrapper shouldRender={this.state.headerShouldRender}>
                    <Header />
                </Wrapper>
                <div className="app-main">
                    {/* //TODO: 1.route for transcend website
                     */}
                    <Route path="/SGP" exact component={SGPComponent} />
                    <Route
                        path="/transcend/charge"
                        exact
                        component={CTFComponent}
                    />
                    <Route
                        path="/expo"
                        exact
                        render={(props) => (
                            <ExpoHomeComponent
                                {...props}
                                setHeaderFooterStatus={(val) =>
                                    this.changeHeaderFooterStatus(val)
                                }
                            />
                        )}
                    />
                    <Route
                        path="/leaderboard"
                        exact
                        component={LeaderboardComponent}
                    />
                    <Route path="/expo/:name" exact component={DescPage} />
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
                <Wrapper shouldRender={this.state.headerShouldRender}>
                    <Footer />
                </Wrapper>
            </HashRouter>
        );
    }
}
export default App;
