import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";

import "../../css/sigComponent.css";
class SigComponent extends React.Component {
  state={}
  componentDidMount() {
    console.log(this.props.location.state.sigName);
    M.AutoInit();
    //TODO: make request for sigData
  }

  render() {
    if(this.state!=null)
    return (
      <div className="sigComponent">
        <div className="row">
          <div className="row center">
            <div className="col l12 s12">
              <h3>
                <span>{this.props.location.state.sigName}</span>
              </h3>
            </div>
          </div>

          <div className="row center">
            <img
              src="/media/{{sig.avatar}}"
              className="responsive-img"
              width="350px"
            />
          </div>
          <div className="row">
            <div className="col l10 offset-l1">
              <h5>{this.state.sigdescri}</h5>
            </div>
          </div>

          <div className="col l12 s12 center">
            <h4>
              <span>
                See what our Core has to say about {this.props.location.state.sigName}!{" "}
              </span>
            </h4>
          </div>
          <div className="video-container center">
            <iframe
              style={{ width: "80%" }}
              src="{{sig.website_talk_url}}"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col l10 offset-l1">
            <h4 className="center">
              <span>Projects {this.state.year}</span>
            </h4>
          </div>
        </div>

        <div className="row proj-item">
          <div className="col l10 offset-l1 s12 z-depth-3">
            <div className="col l4 s12 proj-image center">
              <img className="responsive-img" />
            </div>
            <div className="col l8 s12 proj-info">
              <h4 className="center"> project name{this.state.projectname}</h4>
              <div className="col l12 s12 center">
                <h6 className="center">
                  {this.state.projectsummary} This is project summary
                </h6>
                <div className="row center">
                  <Link
                    className="waves-effect waves-light btn-small"
                    to="/project"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SigComponent;
