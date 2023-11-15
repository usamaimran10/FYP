import React, { useState, useEffect } from "react";
import Sidebar from "../../Sidebar";
import CreateGig from "./CreateGig";
import History from "./History";
import Reminder from "./Reminder";
import RightBar from "./RightBar";
import Jwt from "jsonwebtoken";

import axios from "axios";

const ProfessionalDashboard = () => {
  const [userName, setUsername] = useState([]);
  const [image, setImage] = useState([]);
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
          `http://localhost:5000/api/auth/viewprofessional/${id}`
        );
        setUsername(res.data.user_id.fullName);
        setImage(res.data.user_id.image);
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
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-7">
            <CreateGig name={userName} />
            <History />
            <Reminder />
          </div>
          <div className="col-3">
            <RightBar name={userName} image={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
