import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { registerInitials } from "../../shared/utils/form initial data/RegisterInitials";
import { useForm } from "../../hooks/form-hook";

const RegisterForm = () => {
  const history = useHistory();

  const { formState, inputHandler } = useForm(registerInitials);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    history.push("/success");
  };
  return (
    <form onSubmit={loginHandler}>
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
            type="text"
            label="Email"
            errorText="This field is required"
            onInputChange={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button large disabled={!formState.isValid} type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
