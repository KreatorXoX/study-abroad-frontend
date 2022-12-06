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
import { useUserById } from "../../api/usersApi";
const EmployeeUpdateForm = ({ setShowForm }) => {
  const history = useHistory();
  const empId = useParams().eid;
  const { isLoading, data: empl } = useUserById(empId);
  const { formState, inputHandler } = useForm({}, true);

  const addEmpHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setShowForm(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="updateForm">
      <h2>Update Profile</h2>
      <form onSubmit={addEmpHandler}>
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
