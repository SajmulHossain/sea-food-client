/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Button = ({name, color}) => {
  return (
    <Link className={`btn text-${color} border-0 hover:btn-success hover:text-white bg-transparent border-b-4 border-${color}`}>{name}</Link>
  );
};

export default Button;