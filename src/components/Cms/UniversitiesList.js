import React, { useState } from "react";

import Button from "../../shared/components/Form-Elements/Button";
import Card from "../../shared/components/UI-Elements/Card";
import SearchBar from "../../shared/components/UI-Elements/SearchBar";

import UniversityForm from "../UniversityForm/UniversityForm";
import { data } from "../../dummyData/countries";

import styles from "./UserList.module.css";
const UniversitiesList = () => {
  const [showForm, setShowForm] = useState(false);

  const deleteHandler = (sId) => {
    console.log(`delete ${sId} school`);
  };
  return (
    <div className={styles.listPage}>
      {showForm && (
        <div style={{ width: "100%", display: "flex", placeContent: "center" }}>
          <UniversityForm setShowForm={setShowForm} />
        </div>
      )}
      {!showForm && (
        <>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <div className={styles.addEmp}>
            <Button
              onClick={() => {
                setShowForm(true);
              }}
              mid
              success
            >
              Add University
            </Button>
          </div>
          <div className={styles.list}>
            {data.countries.map((country) =>
              country.schools.map((school) => (
                <Card
                  key={school.id}
                  name={school.name}
                  image={school.logo}
                  actions={
                    <>
                      <Button warning to={`cms/universities/${school.id}`}>
                        Edit
                      </Button>
                      <Button
                        danger
                        onClick={deleteHandler.bind(null, school.id)}
                      >
                        Del
                      </Button>
                    </>
                  }
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UniversitiesList;
