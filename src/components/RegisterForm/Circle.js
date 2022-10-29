import React from "react";

import "./Circle.css";
const Circle = ({ classes, title }) => {
  return (
    <>
      <div className={classes} data-title={title}></div>
    </>
  );
};

export default Circle;
