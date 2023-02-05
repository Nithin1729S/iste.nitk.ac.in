import React from "react";

import TopNav from "./TopNav";
import Projects from "./Projects";
import SideNav from "./SideNav";

import styles from "../css/app.module.css";
import logo from "../Assets/istenitk.png";
import { constant, sigNames } from "../Assets/constants";
class ExpoHomeComponent extends React.Component {
    componentDidMount() {
        this.props.setHeaderFooterStatus(false);
    }
    state = { sig: "catalyst", projectId: 1 };

    handleSigChange = (selectedSig) => {
        this.setState({ sig: selectedSig, projectId: 1 });
    };

    handleProjectChange = (selectedProject) => {
        this.setState({ projectId: selectedProject });
    };

    render() {
        const { projectId, sig } = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.sideContent}>
                    <SideNav
                        handleClick={(project) =>
                            this.handleProjectChange(project)
                        }
                        activeSig={sig}
                        projectId={projectId}
                        data={constant[sig]}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.topNav}>
                        <a
                            href="/"
                            style={{
                                backgroundColor: "white",
                            }}
                        >
                            <img
                                src={logo}
                                width="60"
                                height="50"
                                style={{ float: "right", marginRight: "5%" }}
                                alt="ISTE Logo"
                            />
                        </a>
                        <TopNav
                            sig={sig}
                            handleClick={(sig) => this.handleSigChange(sig)}
                            projectId={projectId}
                            data={sigNames}
                        />
                    </div>
                    <div className={styles.projectContent}>
                        <Projects sig={sig} />
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.setHeaderFooterStatus(true);
    }
}
export default ExpoHomeComponent;
