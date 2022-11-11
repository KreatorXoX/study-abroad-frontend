import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "../hooks/form-hook";
import Input from "../shared/components/Form-Elements/Input";
import Button from "../shared/components/Form-Elements/Button";
import { data } from "../dummyData/countries";
import styles from "./University.module.css";

const University = () => {
  const history = useHistory();
  const uid = useParams().uid;
  const cid = useParams().cid;
  const country = data.countries.find((c) => c.id === cid);
  const university = country.schools.find((u) => u.id === uid);

  return (
    <div className={styles.rows}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div>
            <h2>{university.name}</h2>
            <h2>Cui servire regnare est</h2>
            <div className={styles.searchUni}>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div>
            <iframe
              className={styles.video}
              width="80%"
              height="100%"
              src="https://www.youtube.com/embed/gfUSAEJINRY"
              title="BRUSSELS City Tour / Belgium"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>
            Life in <span>{university.name}</span>
          </h2>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.item}>education</div>
        <div className={styles.item}>research</div>
        <div className={styles.item}>engagement</div>
        <div className={styles.item}>engagement</div>
      </div>
    </div>
  );
};

export default University;
