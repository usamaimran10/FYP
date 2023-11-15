import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Separator2 from "./Separator2";
import { SliderData } from "./SliderData";
import TabComponent from "./TabComponent";
import MainTab from "./MainTab";
import MainTabReverse from "./MainTabReverse";
import Footer from "../HomepageSections/containers/Footer";
const ProfessionalPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <Slider slide={SliderData} />
      </div>
      <div className="row">
        <Separator2 text="Categories" />
      </div>
      <div className="row">
        <TabComponent />
      </div>
      <div className="row">
        <MainTab name="Contractor" />
      </div>
      <div className="row">
        <MainTabReverse name="Contractor" />
      </div>
      <div className="row">
        <MainTab name="Contractor" />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionalPage;
