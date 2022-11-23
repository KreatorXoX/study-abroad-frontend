import React from "react";
import { applications } from "../../dummyData/applications";
import styles from "./Applications.module.css";
const Applications = () => {
  return (
    <div className={styles.layout}>
      {applications.map((application) => {
        return (
          <div
            key={application.id}
            className={`${styles.applicationDetail} ${
              application.status === "pending"
                ? styles.pending
                : application.status === "declined"
                ? styles.declined
                : styles.accepted
            }`}
          >
            <img src={application.logo} alt="school" />
            <div>{application.name}</div>
            <div>{application.status}</div>
            <div>{application.date.toDateString()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Applications;
