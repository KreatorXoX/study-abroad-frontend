import React from "react";

import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import ImageUpload from "../../shared/components/Form-Elements/FileUpload";

const CountryForm = ({ setShowForm }) => {
  const { formState, inputHandler } = useForm();

  const addCountryHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    // implement FormData because there is file input
    setShowForm(false);
  };
  return (
    <form onSubmit={addCountryHandler}>
      <div>
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Country Name"
            errorText="This field is required"
            onInputChange={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        </div>
        <div>
          <ImageUpload
            id="flag"
            type="file"
            label="Flag Image"
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
          Add Country
        </Button>
      </div>
    </form>
  );
};

export default CountryForm;
