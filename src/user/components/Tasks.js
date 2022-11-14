import React from "react";

import Button from "../../shared/components/Form-Elements/Button";
import { tasks } from "../../dummyData/tasks";

import styles from "./Applications.module.css";
const Tasks = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div className={styles.layout}>
      <form onSubmit={formHandler}>
        {tasks.map((task) => {
          const classes =
            task.status.student && task.status.consultant
              ? styles.accepted
              : !task.status.student && !task.status.consultant
              ? styles.declined
              : styles.pending;
          return (
            <div
              key={task.id}
              className={`${styles.applicationDetail} ${classes}`}
            >
              <div className={styles.task}>
                <div>{task.name}</div>
                <div className={styles.taskActions}>
                  <input type="checkbox" defaultChecked={task.status.student} />
                  <input
                    type="checkbox"
                    defaultChecked={task.status.consultant}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.formAction}>
          <Button mid>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Tasks;
