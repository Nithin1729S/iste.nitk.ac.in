import React from "react";
import { Link } from "react-router-dom";

import "../../css/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="page-footer ">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="text">About Us</h5>
                <p className="text text-lighten-4">
                  ISTE NITK strives to supplement the campus’ academic
                  environment by conducting a host of different technical
                  events, workshops, and annual projects, aimed at making
                  learning fun, insightful and impactful. With a host of various
                  Special Interest Groups, or SIGs, our community specializes in
                  domains ranging from various branches of engineering, to
                  business, literature and media, ISTE NITK constantly strives
                  to develop its’ members technical capabilities, and nurture a
                  sense of creativity
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
                  <a
                    href="https://www.facebook.com/istenitk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="center fa fa-facebook-square fa-2x white-text"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/istenitk/"
                    target="_blank"
                    rel="noreferrer"
                    className="anchor"
                  >
                    <i className="center fa fa-instagram fa-2x white-text"></i>
                  </a>

                  <a
                    href="http://www.youtube.com/c/istenitk"
                    target="_blank"
                    rel="noreferrer"
                    className="anchor"
                  >
                    <i className="center fa fa-youtube-play fa-2x white-text"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/indian-society-for-technical-education-nitk-chapter/?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                    className="anchor"
                  >
                    <i className="center fa fa-linkedin fa-2x white-text"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="center container">
              <div className="text">Made with ❤️ by ISTE Crypt</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
