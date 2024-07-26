import React from "react";

const ChildC = ({ array }) => {
  const lengthArr = array.length;
  console.log(lengthArr);

  return (
    <>
      {lengthArr &&
        array.map((value, index) => {
          console.log(value);
          return <h1 key={index}>{value.name}</h1>;
        })}
      {!lengthArr && "Khong ton du lieu"}
    </>
  );
};

export default ChildC;
