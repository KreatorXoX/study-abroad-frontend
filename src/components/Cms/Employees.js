import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../shared/components/Form-Elements/Button";
import Card from "../../shared/components/UI-Elements/Card";
import SearchBar from "../../shared/components/UI-Elements/SearchBar";

import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { employees } from "../../dummyData/employees";

import styles from "./UserList.module.css";
const Employees = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.listPage}>
      {showForm && (
        <div style={{ width: "100%", display: "flex", placeContent: "center" }}>
          <EmployeeForm setShowForm={setShowForm} />
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
              Add Employee
            </Button>
          </div>
          <div className={styles.list}>
            {employees.map((emp) => (
              <Link to={`/profile/${emp.id}`} key={emp.id}>
                <Card
                  name={emp.name}
                  image={
                    "https://img.freepik.com/free-photo/studio-portrait-bearded-man-posing-beige-background-looking-into-camera-with-broad-smile-his-face_295783-16582.jpg?w=1380&t=st=1668962600~exp=1668963200~hmac=1d23c2110f4ae876f45c91e50b56163a351f03060a154d846db3639ed676e04c"
                  }
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;
