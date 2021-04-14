import React from "react";
import { Link } from "react-router-dom";

import "../../css/sigProjectCard.css";

class SigProjectCard extends React.Component {
    render() {
        const {
            imgUrl,
            projID,
            name,
            description,
            isImageLeft,
            isLinkExternal,
            tools,
        } = this.props;
        const imageCircle = (
            <div className="col l4 hide-on-med-and-down ">
                <img
                    src={imgUrl}
                    className={`responsive-img cardImage valign-wrapper ${
                        isImageLeft ? "left" : "right"
                    }`}
                    alt=""
                />
            </div>
        );
        const imageCircleSmall = (
            <div className="col hide-on-large-only s12 proj-image">
                <img
                    src={imgUrl}
                    className="responsive-img cardImage center"
                    alt=""
                />
            </div>
        );
        const toolsUsed = (
            <pre className="toolsList">Tools Used: {tools.map((item) => `\n${item}`)}</pre>
        );
        let Hyperlink = (
            <Link
                to={`/expo/${projID}`}
                className="waves-light btn-small btnColor"
            >
                View Details
            </Link>
        );
        if (isLinkExternal) {
            Hyperlink = (
                <a
                    href={projID}
                    className="waves-light btn-small btnColor"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Details
                </a>
            );
        }
        const Content = (
            <div className="col l8 s12">
                <div className="row">
                    <h4 className="center">{name}</h4>
                    <h6 className="descCard">
                        <span>{description}</span>
                    </h6>
                    <div className="row center">
                        {toolsUsed}
                        <div className="detButton">{Hyperlink}</div>
                    </div>
                </div>
            </div>
        );
        if (isImageLeft)
            var renderedData = (
                <>
                    {imageCircle}
                    {imageCircleSmall}
                    {Content}
                </>
            );
        else
            renderedData = (
                <>
                    {imageCircleSmall}
                    {Content}
                    {imageCircle}
                </>
            );
        return (
            <div className="col l8 offset-l2 z-depth-2 projectCard">
                {renderedData}
            </div>
        );
    }
}

export default SigProjectCard;
