import React from "react";
import "./styles/index.css";

export const TagTimer = ({ active, setActive, time, setTime }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  React.useEffect(() => {
    if (active === true && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      setActive(false);
    }
  }, [active, time]);
  return <div className="content-timer">{formatTime(time)}</div>;
};
