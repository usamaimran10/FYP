import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Slider = ({ slide }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slide.length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <AiFillLeftCircle
        color="#393e46"
        className="left-arrow"
        onClick={prevSlide}
      />
      <AiFillRightCircle
        color="#393e46"
        className="right-arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel img" className="image"></img>
            )}
            ;
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
