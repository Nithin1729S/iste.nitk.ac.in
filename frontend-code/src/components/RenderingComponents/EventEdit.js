import React from "react";
import Axios from "axios";

class EventEdit extends React.Component {
    state = {
        event: [],
    };
    componentDidMount() {
        Axios.get("http://localhost:8000/event")
            .then((result) => {
                this.setState({
                    events: result.data,
                });
            })
            .catch((err) => console.log(err));
    }
    submitHandler = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/event", this.state)
            .then((res) => console.log(res))
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
            poster,
        } = this.state.event[0];
        return (
            <div className="row-center">
                <div className="row">
                    <div className="card col s8 push-s2">
                        <div className="card-content black-text ">
                            <h5 className="center card-title">Edit Event</h5>
                            <form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <div className="input-field col s8 push-s2">
                                        <i className="form-icon material-icons prefix">
                                            event
                                        </i>
                                        {name}
                                        <label>Event name</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <i className="form-icon material-icons prefix">
                                            group
                                        </i>
                                        {no_of_participants}
                                        <label>No. of Participants</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s8 push-s2">
                                        <i className="form-icon material-icons prefix">
                                            date_range
                                        </i>
                                        {date_time}
                                        <label>Date and Time</label>
                                    </div>

                                    <div className="input-field col s4">
                                        <i className="form-icon material-icons prefix">
                                            person
                                        </i>
                                        {contacts}
                                        <label>Contact</label>
                                    </div>
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
                                        <div className="btn">
                                            <span>Poster</span>
                                            <input
                                                type="file"
                                                name="poster"
                                                accept="image/*"
                                                id="img"
                                            />
                                        </div>
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
                                        Save Changes
                                        <i className="material-icons right">
                                            create
                                        </i>
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
export default EventEdit;
