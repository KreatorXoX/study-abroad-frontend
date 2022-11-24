import React from "react";
import { useHistory } from "react-router-dom";
import { data } from "../dummyData/countries";
import Team from "../assets/images/Team.svg";
import Handshake from "../assets/images/Handshake.svg";
import Mortarboard from "../assets/images/Mortarboard.svg";

import styles from "./Countries.module.css";

const Countries = () => {
  const history = useHistory();
  const clickHandler = (id) => {
    history.push(`/countries/${id}`);
  };

  return (
    <div className={styles.bgSec}>
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <h2 className={styles.titles}>Shoot For the Stars</h2>
          <div className={styles.video}>
            <iframe
              title="europe-info"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <h2 className={styles.titles}>
            Bachelors/Masters Degree <br /> Programmes in Europe
          </h2>
          <div className={styles.countriesContent}>
            {data.countries.map((country) => (
              <div
                key={country.id}
                className={styles.country}
                data-label={country.name}
                onClick={clickHandler.bind(null, country.id)}
              >
                <img src={country.flag} width="60" alt="flag" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className={styles.foot}>
        <div className={styles.icon}>
          <img src={Team} width="40" alt="footer" />
          <label className={styles.label}>Private Consultant</label>
        </div>
        <div className={styles.icon}>
          <img src={Handshake} width="40" alt="footer" />
          <label className={styles.label}>Best Prices Guaranteed</label>
        </div>
        <div className={styles.icon}>
          <img src={Mortarboard} width="40" alt="footer" />
          <label className={styles.label}>10 years of experience</label>
        </div>
      </footer>
    </div>
  );
};

export default Countries;
