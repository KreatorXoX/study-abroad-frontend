import React, { useEffect } from "react";

import { useAuthStore } from "../../store/authStore";
import { useForm } from "../../hooks/form-hook";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";

import { employees } from "../../dummyData/employees";

import styles from "./Applications.module.css";
const Settings = () => {
  const { formState, inputHandler, SetData } = useForm();

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    SetData(
      {
        consultId: {
          value: "",
          isValid: false,
        },
        oldPassword: {
          value: "",
          isValid: false,
        },
        newPassword: {
          value: "",
          isValid: false,
        },
        newPassword2: {
          value: "",
          isValid: false,
        },
      },
      false
    );
  }, [SetData]);

  const options = (
    <>
      {employees.map((emp) => (
        <option key={emp.id} value={emp.id}>
          {emp.name}
        </option>
      ))}
    </>
  );
  const consultHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs.consultId);
  };
  const passChangeHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    // admin or the url userId is equal to the logged in user.
    <div className={styles.layout}>
      <div className={styles.settings}>
        {user.role === "admin" && (
          <div>
            <h4>Assign Consultant</h4>
            <form onSubmit={consultHandler}>
              <Input
                id="consultId"
                element="select"
                onInputChange={inputHandler}
                options={options}
                validators={[]}
                defaultText="Assign Consultant"
                initialValid
              />
              <Button type="submit">Save</Button>
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
              validators={[]}
              initialValid
            />
            <Input
              id="newPassword"
              type="password"
              placeholder="New Password"
              onInputChange={inputHandler}
              validators={[]}
              initialValid
            />
            <Input
              id="newPassword2"
              type="password"
              placeholder="Repeat Password"
              onInputChange={inputHandler}
              validators={[]}
              initialValid
            />
            <Button type="submit">Change</Button>
          </form>
        </div>

        <div>
          <h4>Delete Account</h4>
          <Button danger>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
