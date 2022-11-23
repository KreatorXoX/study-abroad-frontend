import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import { data } from "../../dummyData/countries";
const CountryUpdateForm = () => {
  const { formState, inputHandler } = useForm({});
  const history = useHistory();
  const cId = useParams().cid;
  const country = data.countries.find((c) => c.id === cId);
  const updateHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <div className="updateForm">
      <h2>Update {cId}</h2>
      <form onSubmit={updateHandler}>
        <div>
          <div>
            <Input
              id="name"
              type="text"
              placeholder="Country Name"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              initialValue={country.name}
            />
          </div>
          <div>
            <Input
              id="flag"
              type="file"
              placeholder="Upload Image"
              errorText="This field is required"
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
            Update Country
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CountryUpdateForm;
