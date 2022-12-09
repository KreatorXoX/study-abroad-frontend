import React from "react";
import { useParams } from "react-router-dom";
import { useUniversityById } from "../api/universitiesApi";
import LoadingSpinner from "../shared/components/UI-Elements/LoadingSpinner";
import styles from "./University.module.css";

const University = () => {
  const uid = useParams().uid;
  const { data: university, isLoading } = useUniversityById(uid);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className={styles.rows}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div>
            <h2>{university?.name}</h2>
            <h3>{university?.motto}</h3>
            <div className={styles.searchUni}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                asperiores totam in omnis vel amet ea molestiae, soluta tenetur
                deserunt magni ratione fugit a? Laudantium libero nemo fugiat
                labore sit.
              </p>
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
};

export default University;
