import React from "react";

import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import ImageUpload from "../../shared/components/Form-Elements/FileUpload";

const UniversityForm = ({ setShowForm }) => {
  const { formState, inputHandler } = useForm({});

  const selectOptions = data.countries.map((country) => (
    <>
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    </>
  ));

  const addCountryHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setShowForm(false);
  };
  return (
    <div className="updateForm">
      <form onSubmit={addCountryHandler}>
        <div>
          <div>
            <Input
              id="name"
              type="text"
              placeholder="School Name"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="country"
              element="select"
              options={selectOptions}
              type="text"
              defaultText={"Please pick country"}
              onInputChange={inputHandler}
              validators={[]}
            />
          </div>
          <div>
            <Input
              id="info"
              type="text"
              placeholder="School Info"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <ImageUpload
              id="logo"
              type="file"
              label="Logo"
              errorText=""
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="video"
              type="text"
              placeholder="School Youtube Url"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox1Header"
              type="text"
              placeholder="School Box1 Header"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox1Content"
              type="text"
              placeholder="School Box1 Content"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox2Header"
              type="text"
              placeholder="School Box2 Header"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox2Content"
              type="text"
              placeholder="School Box2 Content"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox3Header"
              type="text"
              placeholder="School Box3 Header"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          </div>
          <div>
            <Input
              id="infoBox3Content"
              type="text"
              placeholder="School Box3 Content"
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
    </div>
  );
};

export default UniversityForm;
