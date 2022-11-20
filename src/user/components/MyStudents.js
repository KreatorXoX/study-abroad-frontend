import React from "react";
import Students from "../../components/Cms/Students";
import styles from "./Applications.module.css";
const MyStudents = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.stdList}>
        <Students />
      </div>
    </div>
  );
};

export default MyStudents;
