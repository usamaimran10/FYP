import React from "react";
import Navbar from "../HomepageSections/containers/Navbar";
import Slider from "./Slider";
import { SliderData } from "./SliderData";
import Separator from "../HomepageSections/Component/Separator";
import Separator2 from "./Separator2";
import Tab from "./Tab";
import TabComponent from "./TabComponent";
import MainTab from "./MainTab";
import MainTabLast from "./MainTabLast";
import MainTabReverse from "./MainTabReverse";
import { TabData } from "./TabData";
import Footer from "../HomepageSections/containers/Footer";
import { imgs } from "./MainTabLast";
import { ImGlass } from "react-icons/im";
const CategoriesPage = () => {
  const name1 = "Building and Construction";
  const name2 = "Painting and Decoration";
  const name3 = "Kitchen and Washroom";
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
        <MainTab name={name1} />
      </div>
      <div className="row">
        <MainTabReverse name={name2} />
      </div>
      <div className="row">
        <MainTabLast name={name3} />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default CategoriesPage;
