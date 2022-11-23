import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../shared/components/Form-Elements/Button";
import Input from "../../shared/components/Form-Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../hooks/form-hook";
import { data } from "../../dummyData/countries";
import ImageUpload from "../../shared/components/Form-Elements/FileUpload";

const UniversityUpdateForm = () => {
  const uId = useParams().uid;
  const history = useHistory();
  const { formState, inputHandler } = useForm({});

  const universities = data.countries.map((c) => c.schools).flat();
  const uni = universities.filter((uni) => uni.id === uId);

  const selectOptions = data.countries.map((country) => (
    <>
      <option
        key={country.id}
        value={country.id}
        selected={"Belgium" === country.name}
      >
        {country.name}
      </option>
    </>
  ));

  const updateUniversity = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <div className="updateForm">
      <h2>Update {uni[0].name}</h2>
      <form onSubmit={updateUniversity}>
        <div>
          <div>
            <Input
              id="name"
              type="text"
              placeholder="School Name"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[]}
              initialValue={uni[0].name}
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
              validators={[]}
              initialValue={uni[0].info}
            />
          </div>
          <div>
            <Input
              id="logo"
              type="file"
              placeholder="Upload Image"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[]}
            />
            {/* <ImageUpload label={"University Logo"} /> */}
          </div>
          <div>
            <Input
              id="video"
              type="text"
              placeholder="School Youtube Url"
              errorText="This field is required"
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              initialValue={uni[0].video}
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
              history.goBack();
            }}
          >
            Back
          </Button>
          <Button mid success disabled={!formState.isValid} type="submit">
            Save Country
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UniversityUpdateForm;
