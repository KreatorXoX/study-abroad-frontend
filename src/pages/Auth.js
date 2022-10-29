import React, { useState } from "react";

import styles from "./Auth.module.css";
import UserRegisterForm from "../components/RegisterForm/UserRegisterForm";
import Progressbar from "../components/RegisterForm/ProgressBar";

const Auth = () => {
  const [title, setTitle] = useState({});
  const [pageNum, setPageNum] = useState();

  const getInfos = (title, pageNum) => {
    setTitle(title);
    setPageNum(pageNum);
  };
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.progressbarContent}>
          <Progressbar title={title} pageNum={pageNum} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.authForm}>
            <UserRegisterForm getInfos={getInfos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
