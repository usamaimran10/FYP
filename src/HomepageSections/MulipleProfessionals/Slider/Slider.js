import React from "react";
import "./Slider.css";

const Slider = (props) => {
  var first;
  var second;
  var third;
  switch (Number(props.pos)) {
    case 1:
      first = 0;
      second = 1;
      third = 2;
      break;
    case 2:
      first = 2;
      second = 0;
      third = 1;
      break;
    case 3:
      first = 1;
      second = 2;
      third = 0;
      break;
    default:
      first = 0;
      second = 1;
      third = 2;
  }
  return (
    <div className="Slider">
      <div className="one">{props.children[first]}</div>
      <div className="two">{props.children[second]}</div>
      <div className="three">{props.children[third]}</div>
    </div>
  );
};

export default Slider;
