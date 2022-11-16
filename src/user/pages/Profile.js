import React, { useState } from "react";

import Applications from "../components/Applications";
import Tasks from "../components/Tasks";
import Calendar from "../components/Calendar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFileArchive,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import styles from "./Profile.module.css";

const Profile = () => {
  const [action, setAction] = useState("");
  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        <div className={styles.profileDetails}>
          <div className={styles.profileAvatar}>
            <h2>Avatar</h2>
          </div>
          <div className={styles.profileInfo}>
            <h2>Name Surname</h2>
            <p>Student</p>
          </div>
        </div>
        <div className={styles.profileLinks}>
          <div className={styles.borderTop}></div>
          <p className={styles.link} onClick={() => setAction("applications")}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size="2xl"
              className={styles.icon}
            />
            My Applications
            <span
              className={styles.arrow}
              onClick={() => setAction("applications")}
            >
              <FontAwesomeIcon size="lg" icon={faGreaterThan} />
            </span>
          </p>
          <p className={styles.link} onClick={() => setAction("tasks")}>
            <FontAwesomeIcon
              icon={faFileArchive}
              className={styles.icon}
              size="2xl"
            />
            My tasks
            <span className={styles.arrow} onClick={() => setAction("tasks")}>
              <FontAwesomeIcon size="lg" icon={faGreaterThan} />
            </span>
          </p>
          <p className={styles.link} onClick={() => setAction("meetings")}>
            <FontAwesomeIcon
              size="2xl"
              icon={faHandshake}
              className={styles.icon}
            />
            My Meetings
            <span
              className={styles.arrow}
              onClick={() => setAction("meetings")}
            >
              <FontAwesomeIcon size="lg" icon={faGreaterThan} />
            </span>
          </p>
          <div className={styles.borderBot}></div>
        </div>
      </div>
      <div className={styles.application}>
        {!action && <h1>No Actions Taken Yet.</h1>}
        {action === "applications" && <Applications />}
        {action === "tasks" && <Tasks />}
        {action === "meetings" && <Calendar />}
      </div>
    </div>
  );
};

export default Profile;
