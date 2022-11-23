import React, { useEffect } from "react";

import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import { empInitials } from "../../shared/utils/form initial data/EmployeeInitials";
import { useForm } from "../../hooks/form-hook";

const EmployeeForm = ({ setShowForm }) => {
  const { formState, inputHandler, SetData } = useForm();

  useEffect(() => {
    SetData(empInitials, false);
  }, [SetData]);

  const addEmpHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setShowForm(false);
  };
  return (
    <form onSubmit={addEmpHandler}>
      <div>
        <div>
          <Input
            id="fullname"
            type="text"
            label="Full Name"
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
            validators={[VALIDATOR_REQUIRE()]}
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
  );
};

export default EmployeeForm;
