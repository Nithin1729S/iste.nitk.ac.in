import React from "react";

import TopNav from "./TopNav";
import Projects from "./Projects";
import SideNav from "./SideNav";

import styles from "../css/app.module.css";
import { constant, sigNames } from "../Assets/constants";
import { Link } from "react-router-dom";
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
                        <Link to="../" style={{ float: "right" }}>
                            ISTE NITK
                        </Link>
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
