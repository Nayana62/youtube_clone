import React from "react";
import numeral from "numeral";

const NumberFormatter = ({ number }) => {
  const formattedNumber = numeral(number).format("0.0a").toUpperCase();

  return <span className="mr-1">{formattedNumber}</span>;
};

export default NumberFormatter;
