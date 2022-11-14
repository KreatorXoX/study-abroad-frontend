import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { LoginInitials } from "../../shared/utils/form initial data/LoginInitials";
import { useForm } from "../../hooks/form-hook";

const LoginForm = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const history = useHistory();

  const { formState, inputHandler } = useForm(LoginInitials);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setUser({
      name: formState.inputs.email.value,
      role: "user",
      authenticated: true,
    });
    history.replace("/");
  };
  return (
    <form onSubmit={loginHandler}>
      <div>
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button large warning disabled={!formState.isValid} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
