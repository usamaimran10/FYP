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
    <section>
      <div>
        <img
          src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="travel img"
          className="image"
        />
      </div>
    </section>
  );
};

export default Slider;
