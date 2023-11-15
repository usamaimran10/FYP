import React from "react";
import "./CreateGig.css";

const CreateGig = () => {
  return (
    <>
      <div>
        <div class="container bootstrap snippets bootdey">
          <h1 style={{ marginTop: "20px", color: "#00ADB5" }}>Gig Profile</h1>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="text-center">
                <img src="" class="" alt="" />
                <h6 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
                  Select a photo for your profile
                </h6>

                <input
                  type="file"
                  class="form-control"
                  // onChange={(e) => {
                  //   setFiles(e.target.files[0]);
                  // }}
                  style={{ fontSize: "1.8rem" }}
                />
                <button
                  type="submit"
                  //onClick={handleUpload}
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
                  Create Your Gig
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
                      Title
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Gig Title"
                      //onChange={(e) => handleChange(e, "firstName")}
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
                      Description
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="What will you do"
                      //onChange={(e) => handleChange(e, "address")}
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
                      Orders
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Previous Orders"
                      //onChange={(e) => handleChange(e, "email")}
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
                      Ratings
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      //placeholder={previousData.cnic}
                      //onChange={(e) => handleChange(e, "cnic")}
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
                      Your Package
                    </label>
                  </div>
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="How much will you charge"
                      //onChange={(e) => handleChange(e, "dob")}
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
                      Your Previous Work
                    </label>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div class="col-md-4">
                      <div class="text-center">
                        <img src="" class="" alt="" />
                        <h6 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
                          Sample Work 1
                        </h6>

                        <input
                          type="file"
                          class="form-control"
                          // onChange={(e) => {
                          //   setFiles(e.target.files[0]);
                          // }}
                          style={{ fontSize: "1.8rem" }}
                        />
                        <button
                          type="submit"
                          //onClick={handleUpload}
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
                    <div class="col-md-4">
                      <div class="text-center">
                        <img src="" class="" alt="" />
                        <h6 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
                          Sample Work 2
                        </h6>

                        <input
                          type="file"
                          class="form-control"
                          // onChange={(e) => {
                          //   setFiles(e.target.files[0]);
                          // }}
                          style={{ fontSize: "1.8rem" }}
                        />
                        <button
                          type="submit"
                          //onClick={handleUpload}
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
                    <div class="col-md-4">
                      <div class="text-center">
                        <img src="" class="" alt="" />
                        <h6 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
                          Sample Work 3
                        </h6>

                        <input
                          type="file"
                          class="form-control"
                          // onChange={(e) => {
                          //   setFiles(e.target.files[0]);
                          // }}
                          style={{ fontSize: "1.8rem" }}
                        />
                        <button
                          type="submit"
                          //onClick={handleUpload}
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
                  </div>
                </div>
                <div style={{ justifyContent: "center", marginTop: "30px" }}>
                  <button
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      fontSize: "2rem",
                      backgroundColor: "#00ADB5",
                      borderRadius: "5px",
                    }}
                  >
                    Create
                  </button>
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

export default CreateGig;
