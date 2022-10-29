import React from "react";
import Input from "../../shared/components/Form-Elements/Input";
import Button from "../../shared/components/Form-Elements/Button";

import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
const UserPersonalDetails = ({ values, handleChange, next }) => {
  let canGoNext =
    values.name.isValid &&
    values.surname.isValid &&
    values.email.isValid &&
    values.password.isValid;
  return (
    <form>
      <div>
        <div>
          <Input
            id="name"
            type="text"
            label="Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.name.value}
            initialValid={values.name.isValid}
          />
        </div>
        <div>
          <Input
            id="middleName"
            type="text"
            label="Middle Name"
            errorText=""
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.middleName.value}
            initialValid={true}
          />
        </div>
        <div>
          <Input
            id="surname"
            type="text"
            label="Surname"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.surname.value}
            initialValid={values.surname.isValid}
          />
        </div>
        <div>
          <Input
            id="email"
            type="text"
            label="Email"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.email.value}
            initialValid={values.email.isValid}
          />
        </div>
        <div>
          <Input
            id="password"
            type="password"
            label="Password"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.password.value}
            initialValid={values.password.isValid}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "1rem",
        }}
      >
        <Button
          success
          mid
          disabled={!canGoNext}
          onClick={() => {
            next();
          }}
          type="button"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default UserPersonalDetails;
