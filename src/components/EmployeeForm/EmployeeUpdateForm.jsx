import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import { useUserById, useUpdateEmployee } from "../../api/usersApi";

const EmployeeUpdateForm = (props) => {
  const history = useHistory();
  const empId = useParams().eid;
  const { isLoading, data: empl } = useUserById(empId);
  const { mutate: updateEmployee } = useUpdateEmployee();

  const { formState, inputHandler } = useForm();

  const updateEmpHandler = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: empl._id,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      active: empl.active,
    };
    updateEmployee(updatedUser);
    history.goBack();
  };

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }
  return (
    <div className="updateForm">
      <h2>Update Profile</h2>
      <form onSubmit={updateEmpHandler}>
        <div>
          <div>
            <Input
              id="username"
              type="text"
              label="Username"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[]}
              initialValue={empl?.username}
              initialValid={true}
            />
          </div>
          <div>
            <Input
              id="email"
              type="email"
              label="Email"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[]}
              initialValue={empl?.email}
              initialValid={true}
            />
          </div>
          <div>
            <Input
              id="password"
              type="password"
              label="Password"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[]}
              initialValid={true}
            />
          </div>
          <div>
            <Input
              id="image"
              type="file"
              label="Image"
              errorText=""
              onInputChange={inputHandler}
              validators={[]}
              initialValid={true}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Button
            mid
            warning
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </Button>
          <Button mid success disabled={!formState.isValid} type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeUpdateForm;
