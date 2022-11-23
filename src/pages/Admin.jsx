import React, { useState } from "react";

import EmployeesList from "../components/Cms/EmployeesList";
import StudentsList from "../components/Cms/StudentsList";
import CountriesList from "../components/Cms/CountriesList";
import UniversitiesList from "../components/Cms/UniversitiesList";
import styles from "./Admin.module.css";
const Admin = () => {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${page === 1 ? styles.active : ""}`}
          onClick={() => setPage(1)}
        >
          Employees
        </div>
        <div
          className={`${styles.tab} ${page === 2 ? styles.active : ""}`}
          onClick={() => setPage(2)}
        >
          Students
        </div>
        <div
          className={`${styles.tab} ${page === 3 ? styles.active : ""}`}
          onClick={() => setPage(3)}
        >
          Countries
        </div>
        <div
          className={`${styles.tab} ${page === 4 ? styles.active : ""}`}
          onClick={() => setPage(4)}
        >
          Universities
        </div>
      </div>

      <div className={styles.page}>
        {page === 1 && <EmployeesList />}
        {page === 2 && <StudentsList />}
        {page === 3 && <CountriesList />}
        {page === 4 && <UniversitiesList />}
      </div>
    </div>
  );
};

export default Admin;
