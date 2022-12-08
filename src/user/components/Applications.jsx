import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useForm } from "../../hooks/form-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../shared/components/UI-Elements/Modal";
import { applications } from "../../dummyData/applications";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { useApplications } from "../../api/applicationsApi";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import styles from "./Applications.module.css";
const Applications = () => {
  const stdId = useParams().uid;
  const user = useAuthStore((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const { formState, inputHandler } = useForm({
    universityName: { value: "", isValid: false },
  });

  const {
    data: applications,
    isLoading,
    isFetching,
    isError,
  } = useApplications(stdId);

  if (isLoading || isFetching) {
    return <LoadingSpinner asOverlay />;
  }
  console.log(applications);
  const addApplicationHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setOpenModal(false);
  };
  return (
    <div className={styles.layout}>
      {applications?.map((application) => {
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
            <img src={application.university.logo} alt="school" />
            <div>{application.name}</div>
            <div>{application.status}</div>
            <div className={styles.applicationDate}>
              {application.createdAt}
            </div>
            {user.role === "admin" && (
              <div className={styles.applicationActions}>
                <FontAwesomeIcon icon={faPen} />
                <FontAwesomeIcon icon={faXmarkCircle} />
              </div>
            )}
          </div>
        );
      })}
      <Button
        success
        mid
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Application +
      </Button>
      {openModal && (
        <Modal
          onSubmit={addApplicationHandler}
          show={openModal}
          header={"Add New Application"}
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
              <Button success mid style={{ margin: "0" }} type="submit">
                Save
              </Button>
            </div>
          }
        >
          <div className={styles.singleInput}>
            <Input
              id="universityName"
              type="text"
              value={formState.inputs.universityName.value}
              onInputChange={inputHandler}
              placeholder="University Name"
              validators={[]}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Applications;
