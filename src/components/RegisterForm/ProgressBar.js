import { useState, useEffect, memo } from "react";
import Circle from "./Circle";
import "./ProgressBar.css";

const ProgressBar = ({ title, pageNum }) => {
  const circle = Object.keys(title).length;
  const [active, setActive] = useState(pageNum);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((100 / (circle - 1)) * active);
    setActive(pageNum);
  }, [active, circle, pageNum]);

  const arr = [];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle
        key={i}
        classes={i <= active ? "circle active" : "circle"}
        title={title[i]}
      />
    );
  }

  return (
    <div className="rotation">
      <div className="progress">
        <div className="progressbar">
          <div
            className="showProgress"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          />
          {arr}
        </div>
      </div>
    </div>
  );
};

export default memo(ProgressBar);
