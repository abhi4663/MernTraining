import React from "react";

const Timer = (props) => {
  let style = {
    border: "1px solid black",
    heigth: "20px",
    width: "50px",
    textAlign: "center",
    // position:'static',
    // top:'500px',
    // right:'200px',
    margin: "20px",
    top: "500px",
    borderRadius: "5px",
  };
  return (
    <div>
      <p style={style} id={props.id}>
        0
      </p>
    </div>
  );
};
export default Timer;
