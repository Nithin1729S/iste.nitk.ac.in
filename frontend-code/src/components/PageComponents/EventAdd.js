import React from "react";

import EventInput from "../RenderingComponents/EventInput";
import styles from "../../css/eventAdd.module.css";
import { baseRequest } from "../../constants";
class EventAdd extends React.Component {
    state = {
        name: "",
        no_of_participants: "",
        date_time: "",
        contacts: "",
        editable_by: "",
        sigs: "",
        form_link: "",
        venue: "",
        publicity_message: "",
        poster: "",
    };

    submitHandler = (e) => {
        e.preventDefault();
        baseRequest
            .post("/event/", this.state)
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const {
            name,
            no_of_participants,
            date_time,
            contacts,
            editable_by,
            sigs,
            form_link,
            venue,
            publicity_message,
        } = this.state;
        return (
            <div className={`row-center ${styles.main}`}>
                <div className="row">
                    <div className="card col s8 push-s2">
                        <div className="card-content black-text ">
                            <h5 className="center card-title">Add Event</h5>
                            <form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <EventInput
                                        iconName="event name"
                                        labelName="Event name"
                                        value={name}
                                        onChange={(e) => {
                                            this.setState({
                                                name: e.target.value,
                                            });
                                        }}
                                        type="text"
                                        placeholder="Enter the name of the event"
                                    />
                                    <EventInput
                                        iconName="group"
                                        labelName="Number of Participants"
                                        value={no_of_participants}
                                        onChange={(e) => {
                                            this.setState({
                                                no_of_participants:
                                                    e.target.value,
                                            });
                                        }}
                                        type="number"
                                        placeholder="participants per team in the event"
                                        min="1"
                                        max="4"
                                    />
                                </div>
                                <div className="row">
                                    <EventInput
                                        iconName="date_range"
                                        labelName="Date and Time"
                                        value={date_time}
                                        onChange={(e) => {
                                            this.setState({
                                                date_time: e.target.value,
                                            });
                                        }}
                                        type="text"
                                        placeholder="Enter date in format YYYY/MM/DD hh:mm:ss am"
                                    />
                                </div>
                                <div className="row">
                                    <div className="input-field col s8 push-s2">
                                        <i className="form-icon material-icons prefix">
                                            person
                                        </i>
                                        {editable_by}
                                        <label>Editable by</label>
                                    </div>
                                    <div className="input-field col s2">
                                        <i className="form-icon material-icons prefix">
                                            polymer
                                        </i>
                                        {sigs}
                                        <label>Sigs</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s8 push-s2">
                                        <i className="form-icon material-icons prefix">
                                            link
                                        </i>
                                        {form_link}
                                        <label>Registration link</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <i className="form-icon material-icons prefix">
                                            location_on
                                        </i>
                                        {venue}
                                        <label>venue</label>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="text-field col s10 push-s2 ">
                                        <i className="form-icon material-icons prefix">
                                            message
                                        </i>
                                        <label>Publicity Message</label>
                                        {publicity_message}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="file-field input-field col s7 push-s2">
                                        <button className="btn waves-effect">
                                            <span>Poster</span>
                                            <input
                                                type="file"
                                                name="poster"
                                                accept="image/*"
                                                id="img"
                                            />
                                        </button>
                                        <div className="file-path-wrapper">
                                            <input
                                                className="file-path validate"
                                                type="text"
                                                placeholder="Upload Poster"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        className="btn waves-effect waves-light col push-s5"
                                        type="submit"
                                        name="action"
                                    >
                                        Create event
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventAdd;
