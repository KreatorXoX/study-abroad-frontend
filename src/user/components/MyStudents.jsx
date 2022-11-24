import React from "react";
import StudentsList from "../../components/Cms/StudentsList";
import styles from "./Applications.module.css";
const MyStudents = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.stdList}>
        <StudentsList />
      </div>
    </div>
  );
};

export default MyStudents;
