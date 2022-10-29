import React from "react";
import Success from "../../assets/images/success.jpg";
const Succes = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", gridArea: "form", color: "#94C973" }}>
        Confirmation Successful
      </h2>
      <p>
        You are one step closer to your{" "}
        <span style={{ color: "red" }}>Dreams</span>
      </p>
      <img src={Success} className="successImage" alt="congrats"></img>
    </>
  );
};

export default Succes;
