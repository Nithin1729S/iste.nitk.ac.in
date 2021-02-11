import React from "react";
import axios from "axios";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";


import ProjectCard from "../RenderingComponents/SigProjectCard";
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import "../../css/sigComponent.css";

class SigComponent extends React.Component {
    constructor(props) {
        super(props);
        var value = "Crypt";
        if (typeof this.props.match.params.name != "undefined")
            value = this.props.match.params.name;
        this.state = { name: value };
        this.fetchSig = this.fetchSig.bind(this);
        this.printYear = this.printYear.bind(this);
    }

    printYear(year) {
        return String(year) + "-" + String(year + 1);
    }

    async fetchSig() {
        await axios
            .get(`http://127.0.0.1:8000/sig/${this.state.name}/`)
            .then((res) => {
                this.setState({
                    sigData: res.data,
                });
            });

        await axios
            .get(`http://127.0.0.1:8000/project/current/${this.state.name}/`)
            .then((res) => {
                this.setState({
                    projectData: res.data,
                });
            });
    }

    componentDidMount() {
        M.AutoInit();
        this.fetchSig();
    }
    componentDidUpdate() {
        if (this.props.match.params.name) {
            if (this.props.match.params.name !== this.state.name) {
                this.setState({ name: this.props.match.params.name });
                window.location.reload();
            }
        }
    }

    render() {
        if (this.state.projectData != null) {
            return (
                <div className="sigComponent">
                    <div className="row">
                        <div className="col l12 s12">
                            <TitleWithLine title={this.state.name}/>
                        </div>

                        <div className="col l12 s12">
                            <img
                                src={
                                    "http://127.0.0.1:8000" +
                                    this.state.sigData.avatar
                                }
                                className="responsive-img col s8 l4 center offset-l4 offset-s2"
                            />
                        </div>

                        <div className="row">
                            <div className="col l8 offset-l2 s10 offset-s1 description flow-text">
                                <br />
                                <span>{this.state.sigData.description}</span>
                            </div>
                        </div>

                        <div className="col l12 s12 center">
                            <h4>
                                <span className="videotitle">
                                    See what our Core has to say about{" "}
                                    {this.state.name}!
                                </span>
                            </h4>
                        </div>
                        <div className="col l8 s10 offset-s1 offset-l2">
                            <div className="video-container center">
                                <iframe
                                    src={this.state.sigData.website_talk_url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col l10 offset-l1 s10 offset-s1">
                            <h4 className="center">
                                <span>
                                    Projects{" "}
                                    {this.printYear(
                                        this.state.projectData[0].year
                                    )}
                                </span>
                            </h4>
                        </div>
                    </div>

                    {this.state.projectData.map((project, index) => {
                        return (
                            <div className="row proj-item">
                                <ProjectCard
                                    key={index}
                                    isImageLeft={index % 2 === 0}
                                    projID={project.id}
                                    name={project.name}
                                    description={project.summary}
                                    imgurl={project.img_url}
                                />
                            </div>
                        );
                    })}
                    <br />
                </div>
            );
        } else return null;
    }
}
export default SigComponent;
