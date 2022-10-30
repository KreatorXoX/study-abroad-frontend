import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

import styles from "./Register.module.css";
const Register = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.sideBar}>
          <div className={styles.sideInfo}>
            <h3>Together We</h3>
            <strong>Stand</strong>
          </div>
          <div className={styles.sideInfo}>
            <h3>Together We</h3>
            <strong>Strong</strong>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.form}>
            <h2 className={styles.formTitle}>Registration Page</h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
