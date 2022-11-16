import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import Button from "../../shared/components/Form-Elements/Button";
import { tasks } from "../../dummyData/tasks";

import styles from "./Applications.module.css";
const Tasks = () => {
  const user = useAuthStore((state) => state.user);
  const [taskData, setTaskData] = useState({});

  const changeHandler = (e) => {
    const value = e.target.checked;
    const id = e.target.name;

    setTaskData((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(taskData);
  };
  const deleteTaskHandler = (id) => {
    console.log(`task ${id} deleted`);
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
                  <div className={styles.formControl}>
                    <label htmlFor={`student${task.id}`}>Student</label>
                    <input
                      name={`student${task.id}`}
                      id={`student${task.id}`}
                      onChange={changeHandler}
                      type="checkbox"
                      defaultChecked={task.status.student}
                    />
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor={`consultant${task.id}`}>Consultant</label>
                    <input
                      name={`consultant${task.id}`}
                      id={`consultant${task.id}`}
                      onChange={changeHandler}
                      type="checkbox"
                      defaultChecked={task.status.consultant}
                    />
                  </div>
                </div>
              </div>
              {user && user.role === "admin" && (
                <Button
                  style={{
                    margin: "0",
                    backgroundColor: "#AA4A44",
                    marginLeft: "1rem",
                  }}
                  onClick={deleteTaskHandler.bind(null, task.id)}
                >
                  Delete
                </Button>
              )}
            </div>
          );
        })}
        <div className={styles.formAction}>
          <Button type="submit" mid>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tasks;
