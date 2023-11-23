import React, { useState } from "react";
import "./UpdateCustProfile.css";
import axios from "axios";
import Jwt from "jsonwebtoken";

const UpdateSellerProfile = () => {
  const [image, setImage] = useState([0]);
  const [files, setFiles] = useState("");

  const UpdateSellerProf = async (e) => {
    e.preventDefault();
    // const data = localStorage.getItem("UserData");
    // const decoded = Jwt.decode(data);
    // console.log(decoded.id);
    const varUser = localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);
    try {
      console.log("in try method");
      const res = await axios.put(
        `https://fyp-backend-gules.vercel.app/api/auth/updateseller/${userId.id}`,
        {
          dob: inputValues.dob,
          cnic: inputValues.cnic,

          fullName: inputValues.firstName,
          address: inputValues.address,
          city: inputValues.city,

          company_name: inputValues.companyName,
          image: image,
        }
      );
      console.log("data");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const [inputValues, setInputValues] = React.useState({
    firstName: "",
    address: "",
    companyName: "",
    email: "",
    cnic: 0,
    city: "",
    dob: 0,
    phone: 0,
  });

  const handleChange = ({ target: { value } }, key) => {
    setInputValues({ ...inputValues, [key]: value });
  };
  const handleUpload = () => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "ivnkvkm8");

    axios
      .post("https://api.cloudinary.com/v1_1/niaxeecomsats/image/upload", data)
      .then((res) => {
        console.log(res);
        setImage(res.data.secure_url);
      });
  };

  return (
    <>
      <div>
        <div class="container bootstrap snippets bootdey">
          <h1 style={{ marginTop: "20px", color: "#00ADB5" }}>Edit Profile</h1>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="text-center">
                <img src={image} class="avatar img-circle img-thumbnail" />
                <h6 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
                  Upload a different photo...
                </h6>

                <input
                  type="file"
                  class="form-control"
                  onChange={(e) => {
                    setFiles(e.target.files[0]);
                  }}
                  style={{ fontSize: "1.8rem" }}
                />
                <button
                  type="submit"
                  onClick={handleUpload}
                  style={{
                    fontSize: "1.8rem",
                    backgroundColor: "#00ADB5",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    padding: "5px",
                    marginTop: "10px",
                  }}
                >
                  Upload Photo
                </button>
              </div>
            </div>

            <div class="col-md-9 " style={{ fontSize: "3 rem" }}>
              <div class="alert alert-info alert-dismissable">
                <a
                  class="panel-close close"
                  data-dismiss="alert"
                  style={{ fontSize: "1.8rem" }}
                ></a>
                Please fulfill all fields properly <strong>Thank You</strong>.
              </div>
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    marginTop: "20px",
                    color: "#00ADB5",
                    fontSize: "3rem",
                  }}
                >
                  Personal Info
                </h1>
              </div>

              <form class="form-horizontal" role="form">
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        marginTop: "20px",
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      First Name
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Name"
                      onChange={(e) => handleChange(e, "firstName")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      Address
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Permanent Address"
                      onChange={(e) => handleChange(e, "address")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      Company
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Company Name"
                      onChange={(e) => handleChange(e, "companyName")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      City
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Email"
                      onChange={(e) => handleChange(e, "city")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      CNIC
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your NIC Number"
                      onChange={(e) => handleChange(e, "cnic")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      Date of Birth (DD/MM/YY)
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Date of Birth"
                      onChange={(e) => handleChange(e, "dob")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div>
                    <label
                      style={{
                        color: "#00ADB5",
                        fontSize: "1.8rem",
                      }}
                    >
                      Phone Number
                    </label>
                  </div>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Phone Number"
                      onChange={(e) => handleChange(e, "phone")}
                      style={{ fontSize: "1.8rem" }}
                    />
                  </div>
                </div>
                <div onClick={UpdateSellerProf}>
                  <button>update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default UpdateSellerProfile;
