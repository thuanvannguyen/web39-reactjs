import React from "react";

const ChildParentB = (props) => {
  // console.log(props);

  return (
    <>
      <div>{props.data}</div>
      <p>{props.email}</p>
    </>
  );
};

export default ChildParentB;
