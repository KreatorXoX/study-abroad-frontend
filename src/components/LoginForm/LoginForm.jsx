import React from "react";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { LoginInitials } from "../../shared/utils/form initial data/LoginInitials";
import { useForm } from "../../hooks/form-hook";

const LoginForm = () => {
  const { formState, inputHandler } = useForm(LoginInitials);
  return (
    <div>
      <form>
        <div>
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
          <Button large disabled={""} type="button">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
