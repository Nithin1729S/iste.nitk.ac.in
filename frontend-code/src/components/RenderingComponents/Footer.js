import React from "react";
import { Link, withRouter } from "react-router-dom";

import "../../css/footer.css";

class Footer extends React.Component {
    footerIcons = [
        {
            iconName: "fa-facebook-square",
            iconUrl: "https://www.facebook.com/istenitk/",
        },
        {
            iconName: "fa-instagram",
            iconUrl: "https://www.instagram.com/istenitk/",
        },

        {
            iconName: "fa-youtube-play",
            iconUrl: "http://www.youtube.com/c/istenitk",
        },
        {
            iconName: "fa-linkedin",
            iconUrl:
                "https://www.linkedin.com/company/indian-society-for-technical-education-nitk-chapter/?originalSubdomain=in",
        },
    ];
    render() {
        const val = this.props.value ? this.props.value : "";
        return (
            <div className={`${val} footer`}>
                <footer className={`${val} page-footer`}>
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <div className="row center">
                                    <h5 className="text">Reach us at:</h5>
                                    <div className="row"></div>
                                    {this.footerIcons.map(
                                        ({ iconName, iconUrl }) => {
                                            return (
                                                <a
                                                    key={iconName}
                                                    href={iconUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="anchor"
                                                >
                                                    <i
                                                        className={`center fa ${iconName} fa-2x white-text`}
                                                    />
                                                </a>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <div className="row">
                                    <h5 className="text">Quick Access</h5>
                                    <ul>
                                        <li>
                                            <Link to="/event" className="text">
                                                Events
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/team" className="text">
                                                Our Team
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://istenitk.wordpress.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="center container">
                            <div className="text">
                                Made with ❤️ by ISTE WebDev Team
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
