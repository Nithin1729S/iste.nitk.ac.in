import React from "react";
import axios from "axios";
import parse from "html-react-parser";

import TitleWithLine from "../RenderingComponents/TitleWithLine";
import "../../css/eventDetails.css";
class EventDetails extends React.Component {
    //TODO replace contact id with telephone number in link
    state = {
        eventName: "Cryptober",
        event: null,
    };

    componentDidMount() {
        var value = this.state.eventName;
        if (this.props.match.params !== undefined) {
            console.log(this.props.match.params);
            value = this.props.match.params.name;
        }
        axios
            .get(`http://localhost:8000/event/${value}/`)
            .then((result) => {
                console.log(result.data);
                this.setState({
                    event: result.data,
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        if (this.state.event === null) {
            return <div></div>;
        }
        return (
            <div className="eventDetails container">
                <TitleWithLine title={this.state.event.name} />
                <div className="row">
                    <div className="col l16 m8 offset-m1 s12">
                        <div className="card hoverable z-depth-3 col s12 push-s1">
                            <div className="card-image responsive-img">
                                <img
                                    src={`http://127.0.0.1:8000${this.state.event.poster}`}
                                />
                                <a
                                    id="edit"
                                    href="/eventedit"
                                    className="halfway-fab btn-floating"
                                >
                                    <i className="material-icons waves-effect">
                                        edit
                                    </i>
                                </a>
                            </div>
                            <div className="card-content">
                                <p className="grey-text">
                                    <i className="inline-icon material-icons">
                                        date_range
                                    </i>
                                    {this.state.event.date_time}
                                </p>
                                <br />
                                <p className="grey-text">
                                    <i className="inline-icon material-icons">
                                        location_on
                                    </i>
                                    {this.state.event.venue}
                                </p>
                                <br />
                                <p className="grey-text">
                                    <i className="inline-icon material-icons">
                                        polymer
                                    </i>
                                    {this.state.event.sigs.map(
                                        (item) => ` ${item.name}`
                                    )}
                                </p>
                                <p className="grey-text">
                                    Maximum group members:{" "}
                                    {this.state.event.no_of_participants}
                                </p>
                                <br />
                                <div className="divider"></div>
                                <h5 className="center">About the event</h5>
                                <br />
                                <div className=" grey-text text-darken-2">
                                    {parse(this.state.event.publicity_message)}
                                </div>
                                <div className="divider"></div>
                                <br />
                                Points of contact:
                                <br />
                                <ul>
                                    {this.state.event.contacts.map((item) => {
                                        return (
                                            <li>
                                                <p>
                                                    {item.first_name}{" "}
                                                    {item.last_name}:
                                                    <a href={`tel:${item.id}`}>
                                                        {" "}
                                                        {item.id}
                                                    </a>
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="divider" />
                            </div>
                            <div className="card-action">
                                <center>
                                    <a
                                        className="indigo-text"
                                        href={this.state.event.form_link}
                                    >
                                        Register Now
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventDetails;
