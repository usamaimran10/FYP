import React from "react";
import BlockChain from "./BlockChain";
import BlockChainComponent from "./BlockChainComponent";
import MainBlock from "./MainBlock";
import Navbar from "./Navbar";
import RequestForm from "./RequestForm";
const BidMain = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-12">
          <MainBlock />
        </div>
      </div>
      <div className="row">
        <BlockChainComponent />
      </div>
      <div className="row">
        <div className="col-12">
          <RequestForm />
        </div>
      </div>
    </div>
  );
};

export default BidMain;
