import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar";
import CreatBid from "./CreatBid";
import History from "./History";
import Reminder from "./Reminder";
import RightBar from "./RightBar";
import Jwt from "jsonwebtoken";

const Dashboard = () => {
  const [name, setname] = useState();

  useEffect(() => {
    // const decoded=jwtDecode (localStorage.getItem("UserData"));

    console.log(localStorage.getItem("UserData"));
    let res = localStorage.getItem("UserData");
    let decoded = Jwt.decode(res);
    console.log(decoded);
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-7">
          {/* <CreatBid /> */}
          {/* <History /> */}
          <Reminder />
        </div>
        <div className="col-3">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
