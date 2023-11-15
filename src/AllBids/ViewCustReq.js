import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewCustReq = () => {
  const [request, setRequest] = useState();
  const ReqId = localStorage.getItem("ReqID");
  console.log(ReqId);

  const viewFullReq = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/bid/viewReqOnBids/${ReqId}`
      );
      console.log(res.data);
      setRequest(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    viewFullReq();
  }, []);

  console.log({ request });

  return (
    <div>
      <div>
        <div
          className="container"
          style={{
            border: "5px solid #00ADB5",
            width: "600px",
            height: "100%",
            borderRadius: "10px",
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <label
              style={{
                color: "#00ADB5",
                fontSize: "20px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Full Request
            </label>
          </div>
          <div style={{ display: "flex", marginLeft: "30px" }}>
            <form style={{ justifyContent: "center", marginTop: "30px" }}>
              <div class="form-group">
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={request?.title}
                  // onChange={(e) => handleChange(e, "title")}
                  placeholder="Project Title"
                  style={{ borderRadius: "20px", fontSize: "1.5rem" }}
                />
              </div>

              <div class="form-group">
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Construction Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={request?.construction_type}
                  //   onChange={(e) => handleChange(e, "ConsType")}
                  placeholder="Subject of your project"
                  style={{ borderRadius: "20px", fontSize: "1.5rem" }}
                />
              </div>

              <div class="form-group">
                <label
                  for="exampleFormControlSelect1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Category
                </label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  value={request?.professional_category}
                  //   onChange={(e) => handleChange(e, "categ")}
                  style={{ borderRadius: "20px", fontSize: "1.5rem" }}
                >
                  <option>Contractor</option>
                  <option>Consultant</option>
                  <option>Architecct</option>
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>Carpentor</option>
                  <option>Painter</option>
                </select>
              </div>

              <div class="form-group">
                <label
                  for="exampleFormControlTextarea1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Description of your Bid
                </label>

                <textarea
                  style={{ fontSize: "1.5rem" }}
                  class="form-control"
                  value={request?.description}
                  //   onChange={(e) => handleChange(e, "descp")}
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Price Range
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={request?.min_budget}
                    // onChange={(e) => handleChange(e, "minprice")}
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "100px",
                      fontSize: "2rem",
                    }}
                  />
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#393E46",

                      marginLeft: "20px",
                    }}
                  >
                    to
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={request?.max_budget}
                    // onChange={(e) => handleChange(e, "maxprice")}
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "100px",
                      marginLeft: "20px",
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "30PX" }}>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Days(required for work)
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={request?.duration}
                    // onChange={(e) => handleChange(e, "duration")}
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "100px",
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "30PX" }}>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  City
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    class="form-control"
                    value={request?.city}
                    // onChange={(e) => handleChange(e, "city")}
                    id="exampleFormControlInput1"
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "100px",
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "30PX" }}>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Area
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    class="form-control"
                    value={request?.area}
                    // onChange={(e) => handleChange(e, "area")}
                    id="exampleFormControlInput1"
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "300px",
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "30PX" }}>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  User Id
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    value={request?.user_id?.fullName}
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{
                      border: "0",
                      outline: "0",
                      background: "transparent",
                      borderBottom: "2px solid grey",
                      width: "300px",
                      fontSize: "2rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  justifyContent: "center",
                  marginLeft: "200px",
                  marginTop: "30px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#00ADB5",
                    border: "none",
                    borderRadius: "5PX",
                    color: "white",
                    fontSize: "2rem",
                    marginBottom: "20px",
                    padding: "10px",
                  }}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default ViewCustReq;
