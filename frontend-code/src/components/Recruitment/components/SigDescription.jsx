import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../css/sigDesc.module.css";

class SigDescription extends Component {
    render() {
        return (
            <div className={`row ${styles.container}`}>
                <div className={`col card center z-index-3`}>
                    <div className="card-content col s12">
                        <p className={`${styles.descText}`}>
                            Crypt, an abbreviation of ‘Cryptography', is a SIG that aims to overcome technological barriers by implementing new versatile software and technologies. From hackathons, coding competitions, and web designing, to App development, AR/VR workshops, and Knowledge Exchange Programmes (KEPs), this SIG caters to those who are eager to showcase their skills in the field of Computers. While Crypt is primarily known for its annual flagship event Cryptonite, it is also the brain behind the ISTE Website and the Scotland Yard app.
                        </p>
                    </div>
                    <div className="row"></div>
                    <div className="btnContainer">
                        <Link to={`/expo/`}>
                            <button
                                className={`waves-effect waves-light btn z-depth-0 ${styles.btn}`}
                            >
                                <i
                                    className={`material-icons left ${styles.arrow} `}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </i>
                                Expo
                            </button>
                        </Link>
                        <Link to={`/sig/${this.props.sig}`}>
                            <button
                                className={`waves-effect waves-light btn z-depth-0 ${styles.btn} ${styles.btnprj}`}
                            >
                                <i
                                    className={`material-icons right ${styles.arrow} ${styles.arrowRight}`}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </i>
                                Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SigDescription;
