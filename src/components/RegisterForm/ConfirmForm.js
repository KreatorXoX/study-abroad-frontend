import React from "react";

import Input from "../../shared/components/Form-Elements/Input";
import Button from "../../shared/components/Form-Elements/Button";
const ConfirmForm = ({ values, next, prev, handleChange }) => {
  return (
    <form>
      <div>
        <div>
          <Input
            id="name"
            type="text"
            label="Full Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.name.value + " " + values.surname.value}
            readOnly
          />
        </div>
        <div>
          <Input
            id="email"
            type="text"
            label="Email"
            errorText=""
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.email.value}
            readOnly
          />
        </div>
        <div>
          <Input
            id="transcript"
            type="text"
            label="Transcript"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.transcript.value}
            readOnly
          />
        </div>
        <div>
          <Input
            id="degree"
            type="text"
            label="Degree"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.degree.value}
            readOnly
          />
        </div>
        <div>
          <Input
            id="bio"
            type="text"
            label="Biography"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.bio.value}
            readOnly
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
          onClick={() => {
            next();
          }}
          type="button"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default ConfirmForm;
