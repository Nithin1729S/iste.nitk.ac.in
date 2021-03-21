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
        if (this.props.location.pathname.search("expo")) return null;
        return (
            <div className="footer">
                <footer className="page-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="text">About Us</h5>
                                <p className="text text-lighten-4">
                                    ISTE NITK strives to supplement the campus’
                                    academic environment by conducting a host of
                                    different technical events, workshops, and
                                    annual projects, aimed at making learning
                                    fun, insightful and impactful. With a host
                                    of various Special Interest Groups, or SIGs,
                                    our community specializes in domains ranging
                                    from various branches of engineering, to
                                    business, literature and media, ISTE NITK
                                    constantly strives to develop its’ members
                                    technical capabilities, and nurture a sense
                                    of creativity
                                </p>
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
                                <div className="row">
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
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="center container">
                            <div className="text">
                                Made with ❤️ by ISTE Crypt
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default withRouter(Footer);
