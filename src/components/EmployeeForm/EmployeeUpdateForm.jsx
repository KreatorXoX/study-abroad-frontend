import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import ImageUpload from "../../shared/components/Form-Elements/FileUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import { useUserById, useUpdateEmployee } from "../../api/usersApi";

const EmployeeUpdateForm = () => {
  const { formState, inputHandler } = useForm();

  const history = useHistory();
  const empId = useParams().eid;

  const { data: empl, isLoading, isFetched, isFetching } = useUserById(empId);
  const { mutate: updateEmployee } = useUpdateEmployee();

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

  let content;

  if (isLoading || isFetching) {
    content = <LoadingSpinner asOverlay />;
  }

  if (isFetched) {
    content = (
      <div className="updateForm">
        <h2>Update {empl.username}</h2>
        <form onSubmit={updateEmpHandler}>
          <div>
            <div>
              <Input
                id="username"
                type="text"
                label="Username"
                errorText="This field is required"
                onInputChange={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
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
                validators={[VALIDATOR_REQUIRE()]}
                initialValue={empl?.email}
                initialValid={true}
              />
            </div>
            <div>
              <Input
                id="password"
                type="password"
                label="Password"
                placeholder="**********"
                errorText="This field is required"
                onInputChange={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                initialValid={true}
              />
            </div>
            <div>
              <ImageUpload
                id="image"
                type="file"
                label="Profile Image"
                errorText="Supported extensions are : .jpg, .png, .jpeg"
                onInputChange={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
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
  }
  return content;
};

export default EmployeeUpdateForm;
