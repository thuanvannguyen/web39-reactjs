import PropTypes from "prop-types";

const ChildParentF = ({ a }) => {
  return <div>A: {a}</div>;
};

ChildParentF.propTypes = {
  a: PropTypes.number.isRequired
};

export default ChildParentF;
