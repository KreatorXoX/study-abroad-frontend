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
            <img src={application.logo} width="100" height="50" alt="school" />
            <div>{application.name}</div>
            <div>{application.status}</div>
            <div>{application.date.toLocaleDateString()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Applications;
