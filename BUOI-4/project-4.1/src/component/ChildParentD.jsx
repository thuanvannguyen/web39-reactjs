import React from "react";

const ChildParentD = ({ counter = "2000" }) => {
  console.log(counter);
  return <div>ChildParentD</div>;
};

// ChildParentD.defaultProps = {
//   counter: "3000"
// }
export default ChildParentD;
