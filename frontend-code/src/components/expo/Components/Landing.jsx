import React from 'react'
import styles from '../css/landing.module.css'
import logo from "../Assets/istenitklogo.png";
import DA from '../Assets/down-arrow.png';
import expoBG from '../Assets/expoBG.jpeg';
// import $ from 'jQuery';


    


function Landing() {

  return (
    <div className={`${styles.landing}`}>
        <div className={`${styles.container}`}>
            <div className={`${styles.top}`}>
            <div className={`${styles.logo}`}>
                                <img
                                    src={logo}
                                    alt="ISTE Logo"
                                />
            </div>
            {/* <div className={`${styles.grad_line}`}></div> */}
            <div className={`${styles.landing_text} ${styles.csstyping}`}>
                <p>ISTE</p>
                <p>Virtual Expo</p>
                <p>2023</p>
            </div>
            </div>
            <div className={`${styles.nav_down}`}>
                <button type='button'>
                    <img 
                        src={DA}
                        alt="..."
                    />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Landing;