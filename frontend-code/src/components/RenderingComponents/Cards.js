import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  state = { show: false };

  OnCLick = () => {
    this.setState({ show: true });
  };

  onClickClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="col s12 s12 l3 sigcard" onClick={this.OnCLick}>
        <div className="card z-depth-4" style={{ overflow: "hidden" }}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={this.props.avatar}
              alt={this.props.avatar}
            />
          </div>
          <div className="card-content activator indigo darken-3 waves-effect waves-block waves-light">
            <span className="card-title activator white-text text-darken-4">
              {this.props.name}
              <i className="material-icons right">more_vert</i>
            </span>
          </div>
          {this.state.show ? (
            <div className="card-reveal">
              <span className="card-title white-text">
                {this.props.name}
                <i className="material-icons right" onClick={this.onClickClose}>
                  close
                </i>
              </span>
              <hr />
              <p className="white-text">{this.props.summary}</p>
              <center>
                <Link
                  className="waves-effect waves-ligth btn-small"
                  to={{
                    pathname: "/sig",
                    state: { sigName: this.props.name },
                  }}
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

export default Card;
