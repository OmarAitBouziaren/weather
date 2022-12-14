import React from "react";
import "../style/FormattedDate.css";

function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      updated{" "}
      <span className="textLeft">
        {hours}:{minutes}
      </span>
    </div>
  );
};
export default FormattedDate; 
