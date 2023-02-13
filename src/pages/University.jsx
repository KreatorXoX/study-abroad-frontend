import React from "react";
import { useParams } from "react-router-dom";
import { useUniversityById } from "../api/universitiesApi";
import LoadingSpinner from "../shared/components/UI-Elements/LoadingSpinner";
import styles from "./University.module.css";

const University = () => {
  const uid = useParams().uid;
  const {
    data: university,
    isLoading,
    isFetching,
    isFetched,
  } = useUniversityById(uid);

  let content;

  if (isLoading || isFetching) {
    content = <LoadingSpinner asOverlay />;
  }
  if (isFetched) {
    content = (
      <div className={styles.rows}>
        <div className={styles.row1}>
          <div className={styles.col1}>
            <div>
              <h2>{university?.name}</h2>
              <h3>{university?.motto}</h3>
              <div className={styles.searchUni}>
                <p>{university?.generalInfo}</p>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <iframe
                className={styles.video}
                width="80%"
                height="100%"
                src={university?.videoUrl}
                title="BRUSSELS City Tour / Belgium"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h2>
              Life in <span>{university?.name}</span>
            </h2>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.item} ${styles.item1}`}>
            <div className={styles.overlay}>
              <h5 className={styles.overlayTitle}>
                {university?.infoBoxes?.box1.header}
              </h5>
              <h6 className={styles.overlayDescription}>
                {university?.infoBoxes?.box1.content}
              </h6>
            </div>
          </div>
          <div className={`${styles.item} ${styles.item2}`}>
            <div className={styles.overlay}>
              <h5 className={styles.overlayTitle}>
                {university?.infoBoxes?.box2.header}
              </h5>
              <h6 className={styles.overlayDescription}>
                {university?.infoBoxes?.box2.content}
              </h6>
            </div>
          </div>
          <div className={`${styles.item} ${styles.item3}`}>
            <div className={styles.overlay}>
              <h5 className={styles.overlayTitle}>
                {university?.infoBoxes?.box3.header}
              </h5>
              <h6 className={styles.overlayDescription}>
                {university?.infoBoxes?.box3.content}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default University;
