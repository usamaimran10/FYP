import React from "react";
import Tab from "./Tab";
import { TabData } from "./TabData";

const TabComponent = () => {
  return (
    <div style={{ display: "inline-flex", margin: "0 auto" }}>
      <Tab img={TabData[0].icon} name={TabData[0].name} />
      <Tab img={TabData[1].icon} name={TabData[1].name} />
      <Tab img={TabData[2].icon} name={TabData[2].name} />
      <Tab img={TabData[3].icon} name={TabData[3].name} />
    </div>
  );
};

export default TabComponent;
