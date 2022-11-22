import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";

const EmployeeUpdateForm = ({ setShowForm }) => {
  const history = useHistory();
  const empId = useParams().eid;
  const { formState, inputHandler } = useForm({});

  const addEmpHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setShowForm(false);
  };
  return (
    <div className="updateForm">
      <h2>Update {empId}</h2>
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
              history.goBack();
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

export default EmployeeUpdateForm;
