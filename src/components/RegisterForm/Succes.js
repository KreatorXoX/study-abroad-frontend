import React from "react";
import { useHistory } from "react-router-dom";
import Success from "../../assets/images/success.jpg";
const Succes = () => {
  const history = useHistory();
  return (
    <>
      <h2 style={{ textAlign: "center", gridArea: "form", color: "#94C973" }}>
        Confirmation Successful
      </h2>
      <p
        onClick={() => {
          history.push("/countries");
        }}
      >
        You are one step closer to your{" "}
        <span style={{ color: "red" }}>Dreams</span>
      </p>
      <img src={Success} className="successImage" alt="congrats"></img>
    </>
  );
};

export default Succes;
