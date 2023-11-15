import React, { useState, useEffect } from "react";
import "./NewPassword.css";
import axios from "axios";
const NewPassword = () => {
  const [finalPassword, setFinalPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cnfrmPassword, setCnfrmPassword] = useState();
  // const checkPassword = () => {
  //   if (newPassword > 5 && cnfrmPassword > 5 && cnfrmPassword === newPassword) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const updatePass = async (e) => {
    e.preventDefault();
    console.log(newPassword);
    console.log(cnfrmPassword);
    try {
      if (
        newPassword > 5 &&
        cnfrmPassword > 5 &&
        cnfrmPassword === newPassword
      ) {
        const res = await axios.put(
          "http://localhost:5000/api/auth/updatePassword",
          {
            password: cnfrmPassword,
          }
        );
        console.log(res.data);

        console.log("Hello g");
        window.location.href = "/signin";
      } else window.alert("Passwords do not Match");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div class="card login-form" style={{ width: "520px" }}>
        <div class="card-body" style={{ alignItems: "center" }}>
          <h3 class="card-title text-center" style={{ fontSize: "2rem" }}>
            Change password
          </h3>

          <div class="card-text">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ fontSize: "2rem" }}>
                  Password
                </label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  style={{ fontSize: "2rem" }}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ fontSize: "2rem" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  style={{ fontSize: "2rem" }}
                  onChange={(e) => {
                    setCnfrmPassword(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={updatePass}
                style={{ fontSize: "2rem" }}
                type="submit"
                class="btn btn-primary btn-block submit-btn"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
