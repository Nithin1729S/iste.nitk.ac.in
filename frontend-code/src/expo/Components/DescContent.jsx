import React from "react";
import { constant, sigNames } from "../Assets/constants";
import styles from "../css/descPage.module.css";

const DescContent = ({ sn, id }) => {
  let arr = constant[sn],
    index = 0,
    curProj = {};
  let imgAddr =
    "https://c8.alamy.com/comp/G1Y8X1/fractal-with-large-colorful-curved-tiles-on-black-background-like-G1Y8X1.jpg";
  for (index = 0; index < arr.length; index++) {
    if (arr[index].id === id) {
      curProj = arr[index];
      break;
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.heading}>{curProj.name}</div>
        <div className={styles.headingSub}>
          {sn.charAt(0).toUpperCase() + sn.slice(1)} | 2020
        </div>

        <div className={styles.subheading}>
          <div className={styles.subheadingtext}>Images</div>
        </div>
        <div className={styles.imgDiv}>
          <img src={imgAddr} alt="Punisher" className={styles.imgSize}></img>
        </div>

        <div className={styles.subheading}>
          <div className={styles.subheadingtext}>Description</div>
        </div>
        <div className={styles.description}>{curProj.description}</div>

        <div className={styles.subheading}>
          <div className={styles.subheadingtext}>Meet link</div>
        </div>
        <div className={styles.description}>Visit <a className={styles.meet} href={curProj.meetLink}>this link</a> to join a Google meet and interact live with the people who worked on this project! </div>
      </div>
    </div>
  );
};
export default DescContent;
