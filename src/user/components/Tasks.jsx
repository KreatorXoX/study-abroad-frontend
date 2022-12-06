import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../shared/components/UI-Elements/Modal";
import { useAuthStore } from "../../store/authStore";

import Button from "../../shared/components/Form-Elements/Button";
import { tasks } from "../../dummyData/tasks";

import styles from "./Applications.module.css";
const Tasks = () => {
  const user = useAuthStore((state) => state.user);
  const [taskData, setTaskData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [addTask, setAddTask] = useState("");
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
  const addTaskHandler = (e) => {
    e.preventDefault();
    setOpenModal(false);
    console.log(addTask);
    setAddTask("");
  };
  return (
    <div className={styles.layout}>
      <form className={styles.taskForm} onSubmit={formHandler}>
        {tasks.map((task, idx) => {
          const classes =
            task.status.student && task.status.consultant
              ? styles.accepted
              : !task.status.student && !task.status.consultant
              ? styles.declined
              : styles.pending;
          return (
            <div
              data-idx={idx}
              key={task.id}
              className={`${styles.taskDetail} ${classes}`}
            >
              {idx === 0 && (
                <>
                  <div className={styles.taskLabel1}></div>
                  <div className={styles.taskLabel2}></div>
                </>
              )}
              <div className={styles.task}>
                <div style={{ display: "flex", placeItems: "center" }}>
                  {task.name}
                </div>
                <div className={styles.taskActions}>
                  <div className={styles.formControl}>
                    <input
                      name={`student${task.id}`}
                      id={`student${task.id}`}
                      onChange={changeHandler}
                      type="checkbox"
                      defaultChecked={task.status.student}
                      disabled={task.status.student}
                    />
                  </div>
                  <div className={styles.formControl}>
                    <input
                      name={`consultant${task.id}`}
                      id={`consultant${task.id}`}
                      onChange={changeHandler}
                      type="checkbox"
                      defaultChecked={task.status.consultant}
                      disabled={task.status.consultant}
                    />
                  </div>
                </div>
              </div>
              {user && user.role === "admin" && (
                <Button
                  style={{
                    margin: "0",
                    marginLeft: "1rem",
                    backgroundColor: "var(--white)",
                    color: "var(--danger)",
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          mid
          success
        >
          Add Task
        </Button>
        {openModal && (
          <Modal
            onSubmit={addTaskHandler}
            show={openModal}
            header={"Add New Task"}
            headerButton={
              <>
                <div>
                  <p
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    <FontAwesomeIcon
                      size="2x"
                      style={{ color: "white", cursor: "pointer" }}
                      icon={faXmarkCircle}
                    />
                  </p>
                </div>
              </>
            }
            footerStyle={{
              padding: "0",
              border: "none",
              marginBottom: "1rem",
            }}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                }}
              >
                <Button
                  style={{ margin: "0" }}
                  mid
                  danger
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  disabled={addTask.length < 3}
                  success
                  mid
                  style={{ margin: "0" }}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            }
          >
            <div className={styles.singleInput}>
              <input
                type="text"
                value={addTask}
                onChange={(e) => {
                  setAddTask(e.target.value);
                }}
                placeholder="Task Name"
              />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Tasks;
