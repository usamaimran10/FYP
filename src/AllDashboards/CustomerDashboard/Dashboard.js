import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar";
import CreatBid from "./CreatBid";
import History from "./History";
import Reminder from "./Reminder";
import RightBar from "./RightBar";
import Jwt from "jsonwebtoken";

import axios from "axios";

const Dashboard = () => {
  const [userName, setUsername] = useState([]);
  const getUserName = () => {
    const data = localStorage.getItem("UserData");
    const decoded = Jwt(data);
    console.log(decoded.id);

    return decoded.id;
  };
  const getDataFromAPI = async () => {
    const id = await getUserName();
    console.log("Printing id");
    console.log(id);

    if (getUserName) {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/viewuser/${id}`
        );
        setUsername(res.data.fullName);
        console.log(userName);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Someting Went Wrong...");
    }
  };
  useEffect(() => {
    getDataFromAPI();
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-7">
          <CreatBid name={userName} />
          <History />
          <Reminder />
        </div>
        <div className="col-3">
          <RightBar name={userName} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;