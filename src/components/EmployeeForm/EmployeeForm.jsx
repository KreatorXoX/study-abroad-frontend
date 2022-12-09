import React, { useEffect } from "react";

import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { useAddEmployee } from "../../api/usersApi";
import { empInitials } from "../../shared/utils/form initial data/EmployeeInitials";
import { useForm } from "../../hooks/form-hook";
import ImageUpload from "../../shared/components/Form-Elements/FileUpload";

const EmployeeForm = ({ setShowForm }) => {
  const { formState, inputHandler, SetData } = useForm();
  const { mutate: addEmployee } = useAddEmployee();

  useEffect(() => {
    SetData(empInitials, false);
  }, [SetData]);

  const addEmpHandler = (e) => {
    e.preventDefault();

    const newUser = {
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      image: formState.inputs.image.value,
      role: "employee",
    };

    addEmployee(newUser);
    setShowForm(false);
  };
  return (
    <div className="updateForm">
      <form onSubmit={addEmpHandler}>
        <div>
          <div>
            <Input
              id="username"
              type="text"
              label="Username"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="email"
              type="email"
              label="Email"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_EMAIL()]}
            />
          </div>
          <div>
            <Input
              id="password"
              type="password"
              label="Password"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_MINLENGTH(6)]}
            />
          </div>
          <div>
            <ImageUpload
              id="image"
              type="file"
              label="Profile Image"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
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
              setShowForm(false);
            }}
          >
            Back
          </Button>
          <Button mid success disabled={!formState.isValid} type="submit">
            Save emp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
