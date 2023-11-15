import React from "react";
import Tab from "./Tab";
import { TabData } from "./TabData";
import { useParams } from "react-router-dom";

const TabComponent = () => {
  // const GoToSpecificProduct = (n) => {
  //   console.log(" method");
  //   const title = n;
  //   if (title == "Building and Hardware") {
  //     window.location.href = "/builing";
  //   } else if (title == "Kitchen and Washroom") {
  //     window.location.href = "/kitchen";
  //   }
  // };
  const { name } = useParams();
  return (
    <>
      <div style={{ display: "inline-flex", margin: "0 auto" }}>
        <Tab img={TabData[0].icon} name={TabData[0].name} />

        <Tab img={TabData[1].icon} name={TabData[1].name} />
        <Tab img={TabData[2].icon} name={TabData[2].name} />
        <Tab img={TabData[3].icon} name={TabData[3].name} />
        <Tab img={TabData[4].icon} name={TabData[4].name} />
        <Tab img={TabData[5].icon} name={TabData[5].name} />
        <Tab img={TabData[6].icon} name={TabData[6].name} />
      </div>
    </>
  );
};

export default TabComponent;
