import React, { useState } from "react";

import { useUniversities } from "../../api/universitiesApi";
import Button from "../../shared/components/Form-Elements/Button";
import Card from "../../shared/components/UI-Elements/Card";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import SearchBar from "../../shared/components/UI-Elements/SearchBar";

import UniversityForm from "../UniversityForm/UniversityForm";

import styles from "./UserList.module.css";
const UniversitiesList = () => {
  const [showForm, setShowForm] = useState(false);

  const {
    data: universities,
    isLoading,
    isFetching,
    isFetched,
  } = useUniversities();

  const deleteHandler = (sId) => {
    console.log(`delete ${sId} school`);
  };

  let content;

  if (isLoading || isFetching) {
    content = <LoadingSpinner asOverlay />;
  }

  if (isFetched) {
    content = (
      <div className={styles.listPage}>
        {showForm && (
          <div
            style={{ width: "100%", display: "flex", placeContent: "center" }}
          >
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
              {universities?.map((uni) => (
                <Card
                  key={uni._id}
                  name={uni.name}
                  image={uni.logo}
                  imgStyle={{ borderRadius: "0", objectFit: "contain" }}
                  actions={
                    <>
                      <Button warning to={`/cms/universities/${uni._id}`}>
                        Edit
                      </Button>
                      <Button
                        danger
                        onClick={deleteHandler.bind(null, uni._id)}
                      >
                        Del
                      </Button>
                    </>
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
  return content;
};

export default UniversitiesList;
