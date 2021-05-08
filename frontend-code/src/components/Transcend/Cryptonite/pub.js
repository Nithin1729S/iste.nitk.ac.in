import React from "react";

import { imgAdd } from "./TabHead";
import styles from "./css/crypt.module.css";
class Cryptonite extends React.Component {
    componentDidMount() {
        this.props.setFooterVal("crypt");
    }
    render() {
        return (
            <div
                className={styles.main}
                style={{ paddingTop: "20%", paddingBottom: "20%" }}
            >
                <div className={styles.title} style={{ marginBottom: "10%" }}>
                    <h3>
                        Cryptonite Coming Soon ...
                        <br />
                        9th May @ 11am!
                    </h3>
                </div>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.blackBoxContainer}>
                            <div className={styles.blackBox}>
                                <div className={styles.blackBoxFront}>
                                    <img
                                        src={imgAdd}
                                        className={styles.image}
                                        alt="Black Box"
                                    />
                                </div>
                                <div className={styles.blackBoxA} />
                                <div className={styles.blackBoxB} />
                                <div className={styles.blackBoxC} />
                                <div className={styles.blackBoxD} />
                                <div className={styles.blackBoxE} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        this.props.setFooterVal("");
    }
}
export default Cryptonite;
