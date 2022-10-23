import React from "react";
import Input from "../shared/components/Form-Elements/Input";
import Button from "../shared/components/Form-Elements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../shared/utils/validators";
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <h3 className={styles.cto}>
              <span className={styles.color}>Hayalindeki</span> Avrupa Ulkesinde
              <br />
              <span className={styles.color}>Dunya</span> Standartlarinda <br />
              <span className={styles.color}>Egitim</span> Firsatini Yakalamaya
              <br />
              <span className={styles.color}>Hazir</span> Misiniz ?
            </h3>

            <div className={styles.actions}>
              <Button large to="/countries">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <form className={styles.form}>
            <h2>Giris Yap</h2>
            <div className={styles["form-control"]}>
              <Input
                id="email"
                type="email"
                //label="Email"
                placeholder="Email : ex@example.com"
                v
                errorText="Enter a valid email"
                onInputChange={() => {}}
                validators={[VALIDATOR_EMAIL()]}
              />
            </div>
            <div className={styles["form-control"]}>
              <Input
                id="password"
                type="password"
                // label="Password"
                placeholder="Password"
                errorText="Enter a valid password"
                onInputChange={() => {}}
                validators={[VALIDATOR_REQUIRE()]}
              />
            </div>
            <div className={styles["form-action"]}>
              <Button type="submit" mid>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.bottomContent}>
          <h3>Careousel</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
