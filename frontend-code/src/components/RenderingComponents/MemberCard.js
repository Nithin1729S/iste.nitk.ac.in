import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class MemberCard extends React.Component {
  render() {
    const imageCicle = (
      <div className="col l4 s12 proj-image center">
        <img
          src={this.props.imgurl}
          className="responsive-img circle"
          style={({ width: "300px" }, { height: "300px" })}
        />
      </div>
    );
    const Content = (
      <div className="col l8 s12">
        <div className="row center">
          <h4>{this.props.name}</h4>
          <h6>{this.props.role}</h6>
          <p>{this.props.content}</p>
        </div>
        <div className="row center">
          <a
            href={[this.props.linkedin]}
            className="primary-link btn-large btn-floating waves-effect waves-light"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href={this.props.email}
            className="primary-link btn-large btn-floating waves-effect waves-light"
          >
            <i className="material-icons">mail_outline</i>
          </a>
        </div>
      </div>
    );
    if (this.props.isImageLeft)
      var renderedData = (
        <>
          {imageCicle}
          {Content}
        </>
      );
    else
      renderedData = (
        <>
          {Content}
          {imageCicle}
        </>
      );
    return (
      <div
        className="col l10 offset-l1 s12 z-depth-2"
        style={{ padding: "20px" }}
      >
        {renderedData}
      </div>
    );
  }
}

export default MemberCard;
