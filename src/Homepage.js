import React from "react";
import "./Homepage.css";
import Navbar from "./HomepageSections/containers/Navbar";
import Slider from "./Categories/Slider";
import { SliderData } from "./Categories/SliderData";
import Carousel from "./HomepageSections/Carousel/Carousel";
import MultipleItem from "./HomepageSections/MultipleItems/MultipleItem";
import MultipleProfessionals from "./HomepageSections/MulipleProfessionals/MultipleProfessionals";
import Separator from "./HomepageSections/Component/Separator";
import Product from "./HomepageSections/containers/Product";
import Sololabor from "./HomepageSections/containers/Sololabor";
import Features from "./HomepageSections/containers/Features";
import Footer from "./HomepageSections/containers/Footer";

import { useParams } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Homepage = () => {
  const { role } = useParams();

  return (
    <div className="Homepage">
      <Navbar role={role} />
      <Slider slide={SliderData} />
      <Separator text="Our Main Categories" />
      <MultipleItem />
      <Separator text="Trending Products" />
      <Product />
      <Separator text="Professionals" />
      <MultipleProfessionals />
      <Separator text="Solo Labors" />
      <Sololabor />
      <Separator text="Top Features" />
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
