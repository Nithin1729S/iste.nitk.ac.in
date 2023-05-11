import React from 'react'
import styles from '../css/landing.module.css'
import logo from "../Assets/istenitklogo.png";
import DA from '../Assets/down-arrow.png';
import expoBG from '../Assets/expoBG.jpeg';
// import $ from 'jQuery';
import video from '../Assets/ExpoLogo1.mp4';

    


function Landing() {

    document.addEventListener('DOMContentLoaded', function() {
        const video = document.getElementById('myVideo');
        
        video.play()
          .then(function() {
            // Autoplay started successfully
          })
          .catch(function(error) {
            // Autoplay was prevented
            // Handle the error or provide an alternative action
          });
      });
  return (
    <div className={`${styles.landing}`}>
        <div>
            <video id='myVideo' className={`${styles.video}`} muted >
                <source src={video} type="video/mp4" />
            </video>
            {/* <video className={`${styles.video}`} autoplay="autoplay" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto">
                <source src={video} type="video/mp4" />
            </video> */}
            {/* <iframe className={`${styles.video}`} height="500"  src={video} allow='autoplay'>

            </iframe> */}
        </div>
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