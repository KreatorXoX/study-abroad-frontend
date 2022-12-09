import React, { useState } from "react";

import { useAuthStore } from "../../store/authStore";
import { useForm } from "../../hooks/form-hook";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";

import { useUserById, useUsersByRole } from "../../api/usersApi";

import styles from "./Applications.module.css";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
const Settings = () => {
  const user = useAuthStore((state) => state.user);
  const stdId = useParams().uid;
  const { data: student, isLoading: isStudentLoading } = useUserById(stdId);
  const { data: employees, isLoading, isFetched } = useUsersByRole("employee");

  const [consults, setConsults] = useState(student?.assignedConsultants);

  const { formState: consultFormState, arrayInputHandler } = useForm({
    consultId: {
      value: [],
      isValid: false,
    },
  });
  const { formState, inputHandler } = useForm({
    oldPassword: {
      value: "",
      isValid: false,
    },
    password1: {
      value: "",
      isValid: false,
    },
    password2: {
      value: "",
      isValid: false,
    },
  });

  const options = (
    <>
      {employees?.map((emp) => (
        <option key={emp._id} value={emp.username + "," + emp._id}>
          {emp.username}
        </option>
      ))}
    </>
  );

  const match =
    formState.inputs.password1.value === formState.inputs.password2.value;

  const addConsultHandler = () => {
    setConsults(consultFormState.inputs.consultId.value);
  };
  const saveConsultHandler = (e) => {
    e.preventDefault();
    console.log(
      consultFormState.inputs.consultId.value.map((id) => id.split(",")[1])
    );
  };
  const passChangeHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  let content;
  if (isLoading || isStudentLoading) {
    content = <LoadingSpinner />;
  }

  if (isFetched) {
    content = (
      // admin or the url userId is equal to the logged in user.
      <div className={styles.layout}>
        <div className={styles.settings}>
          {user.role === "admin" && (
            <div>
              <h4>Assign Consultant</h4>
              <ul>
                {consults?.map((cons, idx) => (
                  <li key={cons} style={{ marginBottom: "0.5rem" }}>
                    {cons.split(",")[0]}
                    <FontAwesomeIcon
                      style={{
                        marginLeft: "0.5rem",
                        cursor: "pointer",
                        color: "var(--danger)",
                      }}
                      size="lg"
                      icon={faCircleXmark}
                      onClick={() => {
                        setConsults((prev) =>
                          prev.filter((cons, i) => i !== idx)
                        );
                      }}
                    />
                  </li>
                ))}
              </ul>
              <form onSubmit={saveConsultHandler}>
                <Input
                  id="consultId"
                  element="select"
                  onInputChange={arrayInputHandler}
                  options={options}
                  validators={[]}
                  defaultText="Assign Consultant"
                />
                <Button
                  disabled={consultFormState.inputs.consultId.value.length < 1}
                  type="submit"
                >
                  Save
                </Button>
                <Button onClick={addConsultHandler}>Add +</Button>
              </form>
            </div>
          )}
          <div>
            <h4>Update Password</h4>
            <form onSubmit={passChangeHandler}>
              <Input
                id="oldPassword"
                type="password"
                placeholder="Old Password"
                onInputChange={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                initialValid
              />
              <Input
                id="password1"
                type="password"
                placeholder="New Password"
                onInputChange={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Required field"
                initialValid
              />
              <Input
                id="password2"
                type="password"
                placeholder="Repeat Password"
                onInputChange={inputHandler}
                errorText="Required field"
                validators={[VALIDATOR_REQUIRE()]}
              />
              {!match && <p style={{ color: "red" }}>Password doesnt match</p>}
              <Button disabled={!formState.isValid || !match} type="submit">
                Change
              </Button>
            </form>
          </div>

          <div>
            <h4>Delete Account</h4>
            <Button danger>Delete</Button>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Settings;
