import React from "react";
import PropTypes from "prop-types";

function AddBtn({ name, age, getTodo }) {
  //   console.log(name, age);
  return <button onClick={getTodo}>Add</button>;
}

AddBtn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  getTodo: PropTypes.func,
};

export default AddBtn;
