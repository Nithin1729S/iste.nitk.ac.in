import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class EventComponent extends React.Component {
    state = {
        events: [],
    };

    componentDidMount() {
        axios.get("http://localhost:8000/event").then((result) => {
            this.setState({
                events: result.data,
            });
        });
    }
    render() {
        const mystyle = {
            fontSize: 18,
            color: "black",
        };
        return (
            <div>
                {!this.state.events || this.state.events.length <= 0 ? (
                    <div className="row">
                        <h2
                            className="indigo-text text-darken-4 center-align"
                            style={{ textDecoration: "underline" }}
                        >
                            Events
                        </h2>
                        <div className="col s12 m8 push-m2">
                            <div
                                className="card-panel z-depth-3"
                                style={{ height: 200 }}
                            >
                                <span className="grey-text text-lighten-1 center-align">
                                    <br />
                                    <br />
                                    <div style={{ fontSize: 25 }}>
                                        No Events Scheduled For Now
                                    </div>
                                    <br />
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {this.state.events.map((event) => (
                            <div className="row">
                                <h2
                                    className="indigo-text text-darken-4 center-align"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Events
                                </h2>
                                <div className="card hoverable large z-depth-3">
                                    <div className="card-image">
                                        <img src="{{event.poster.url}}" />
                                        <h5 className="center card-title">
                                            {event.name}
                                        </h5>
                                    </div>
                                    <div className="card-content">
                                        <p className="grey-text">
                                            <i className="inline-icon material-icons">
                                                date_range
                                            </i>
                                            {event.date_time}
                                        </p>
                                        <br />
                                        <p className="grey-text">
                                            <i className="inline-icon material-icons">
                                                location_on
                                            </i>
                                            {event.venue}
                                        </p>
                                        <br />
                                        <p className="grey-text">
                                            <i className="inline-icon material-icons">
                                                polymer
                                            </i>
                                            {this.state.events[
                                                event
                                            ].sigs.map((sig) => ({ sig }))}
                                        </p>
                                    </div>

                                    <div className="card-action">
                                        <center>
                                            <Link
                                                className="indigo-text"
                                                to="/eventdetails"
                                            >
                                                View Details
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
export default EventComponent;
