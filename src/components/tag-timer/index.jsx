import React from "react";
import "./styles/index.css";

export const TagTimer = ({ active, setActive,initialtime}) => {
  const [time, setTime] = React.useState(initialtime);
  React.useEffect(() => {
    if (active === true && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      setActive(false);
    }
  }, [active, time , initialtime]);
  return <div className="content-timer">{time}</div>;
};
