import React from "react";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
const UserReqFiles = ({ values, handleChange, next, prev }) => {
  let canGoNext =
    values.transcript.isValid && values.degree.isValid && values.bio.isValid;
  return (
    <form className="authForm">
      <div>
        <div>
          <Input
            id="transcript"
            type="text"
            label="Transcript"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.transcript.value}
            initialValid={values.transcript.isValid}
          />
        </div>
        <div>
          <Input
            id="degree"
            type="text"
            label="Degree"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.degree.value}
            initialValid={values.degree.isValid}
          />
        </div>
        <div>
          <Input
            id="bio"
            label="Biography"
            errorText="This field is required"
            element="textarea"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.bio.value}
            initialValid={values.bio.isValid}
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
          warning
          mid
          onClick={() => {
            prev();
          }}
          type="button"
        >
          Previous
        </Button>
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

export default UserReqFiles;
