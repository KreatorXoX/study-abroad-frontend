import React from "react";

import Slider from "../shared/components/UI-Elements/Slider";
import Button from "../shared/components/Form-Elements/Button";
import SidePicture from "../assets/images/BG.jpg";

import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div>
            <h1 className={styles.cto}>
              <div className={styles.highlight}>Thou Shall Not Pass</div>
              <br />
              <span className={styles.color}>The Best Consultants</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className={styles.actions}>
              <Button large to="/countries">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.sidePic}>
          <img src={SidePicture} alt="homepage" />
        </div>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  );
};

export default Landing;
