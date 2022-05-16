import React from "react";
import { Link } from "react-router-dom";

class SigCard extends React.Component {
    state = { show: false };

    OnCLick = () => {
        this.setState({ show: true });
    };

    onClickClose = () => {
        this.setState({ show: false });
    };

    render() {
        const { avatar, name, summary, buttonLink } = this.props;
        return (
            <div className="col s12 s12 l3 sigcard" onClick={this.OnCLick}>
                <div className="card z-depth-4" style={{ overflow: "hidden" }}>
                    <div className="card-image waves-block waves-light">
                        <img className="activator" src={avatar} alt={avatar} />
                    </div>
                    <div className="card-content activator indigo darken-3 waves-block waves-light">
                        <span className="card-title activator white-text text-darken-4">
                            {name}
                            <i className="material-icons right">more_vert</i>
                        </span>
                    </div>
                    {this.state.show ? (
                        <div className="card-reveal">
                            <span className="card-title white-text">
                                {name}
                                <i
                                    className="material-icons right"
                                    onClick={this.onClickClose}
                                >
                                    close
                                </i>
                            </span>
                            <hr />
                            <pre className="white-text">{summary}</pre>
                            <center>
                                <Link
                                    className="waves-light btn-small"
                                    to={ buttonLink }
                                >
                                    View More
                                </Link>
                            </center>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default SigCard;
