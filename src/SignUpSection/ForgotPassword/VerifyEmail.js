import React from "react";

const VerifyEmail = () => {
  const gotoNewPass = () => {
    window.location.href = "/gotoNewPass";
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#00ADB5",
          marginTop: "30px",
        }}
      >
        Check Your Email
      </h1>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10" style={{ marginTop: "30px" }}>
          <form
            class="card mt-4 col-lg-12 col-md-12"
            style={{ fontSize: "2rem", height: "230px" }}
          >
            <div class="card-body ">
              <div class="forgot">
                <h2>Please Check Your Email</h2>
                <p>
                  We have sent a link on your email through which you can reset
                  your password.
                </p>
                <ol class="list-unstyled">
                  <li>
                    <span class="text-primary text-medium">1. </span>Go to Your
                    Email Address
                  </li>
                  <li>
                    <span class="text-primary text-medium">2. </span>Click on
                    the link
                  </li>
                  <li>
                    <span class="text-primary text-medium">3. </span>Reset Your
                    Password
                  </li>
                </ol>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
