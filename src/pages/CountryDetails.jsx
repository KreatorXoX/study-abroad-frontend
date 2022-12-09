import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "../hooks/form-hook";
import Input from "../shared/components/Form-Elements/Input";
import Button from "../shared/components/Form-Elements/Button";

import { useCountryById } from "../api/countriesApi";
import styles from "./CountryDetails.module.css";
import { VALIDATOR_REQUIRE_SELECT } from "../shared/utils/validators";

const CountryDetails = () => {
  const { formState, inputHandler } = useForm({
    universityId: {
      value: "",
      isValid: false,
    },
  });
  const history = useHistory();
  const cId = useParams().cid;

  const { isLoading, data: country } = useCountryById(cId);

  const universityHandler = (e) => {
    e.preventDefault();
    history.push(`/universities/${formState.inputs.universityId.value}`);
  };
  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  const selectOptions = country?.universities?.map((university) => (
    <option key={university._id} value={university._id}>
      {university.name}
    </option>
  ));

  return (
    <div className={styles.rows}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div>
            <h2>Education in {country.name}</h2>
            <p>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className={styles.searchUni}>
              <form onSubmit={universityHandler} className={styles.searchForm}>
                <div className={styles.dropdown}>
                  <Input
                    id="universityId"
                    element="select"
                    options={selectOptions}
                    type="text"
                    defaultText={"Please pick a university name"}
                    onInputChange={inputHandler}
                    validators={[VALIDATOR_REQUIRE_SELECT()]}
                  />
                </div>
                <div className={styles.formAction}>
                  <Button
                    disabled={!formState.isValid}
                    type="submit"
                    mid
                    success
                  >
                    Show
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div>
            <iframe
              className={styles.video}
              width="80%"
              height="100%"
              src={country.videoUrl}
              title="Life In Belgium"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>
            Life in <span>{country.name}</span>
          </h2>
        </div>
      </div>
      <div className={styles.row2}>
        <h2>
          Universities You Can Apply in <span> {country.name}</span>
        </h2>
        <div className={styles.universities}>
          {country?.universities?.map((university) => (
            <div key={university._id + 1} className={styles.uniCard}>
              <img alt="university" src={university.logo} />
              <p className={styles.uniLabel}>{university.name}</p>
              <Button
                to={`/universities/${university._id}`}
                exact={"true"}
                style={{
                  width: "50%",
                  fontSize: "0.9rem",
                  padding: "0.25rem 0",
                  margin: "0",
                }}
              >
                Apply
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
