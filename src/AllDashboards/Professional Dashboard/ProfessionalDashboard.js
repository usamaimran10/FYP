import React, { useState, useEffect } from "react";
import Sidebar from "../../Sidebar";
import CreateGig from "./CreateGig";
import History from "./History";
import Reminder from "./Reminder";
import RightBar from "./RightBar";
import Jwt from "jsonwebtoken";

import axios from "axios";
import ProfessionalDashboardMain from "./ProfessionalDashboardMain";
import { Box } from "@mui/material";

const ProfessionalDashboard = () => {
  const [userName, setUsername] = useState([]);
  const [image, setImage] = useState([]);
  const getUserName = () => {
    // const data = localStorage.getItem("UserData");
    // const decoded = Jwt.decode(data);
    // console.log(decoded.id);

    // return decoded.id;
    const varUser = localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);
    return userId.id;
  };
  const getDataFromAPI = async () => {
    const id = await getUserName();
    console.log("Printing id");
    console.log(id);

    if (getUserName) {
      try {
        const res = await axios.get(
          `https://fyp-backend-gules.vercel.app/api/auth/viewprofessional/${id}`
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
    <Box>
      <ProfessionalDashboardMain name={userName} />
    </Box>
  );
};

export default ProfessionalDashboard;
