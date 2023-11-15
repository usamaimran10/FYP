import React from "react";

const MainTabLast = (props) => {
  return (
    <>
      <div>
        <label
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginLeft: "30px",
            marginTop: "30px",
            fontSize: "3rem",
            color: "#393E46",
          }}
        >
          {props.name}
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="container"
          style={{
            width: "500px",
            height: "300px",
            backgroundImage: "url(kitchen.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "20px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "180px",
            height: "150px",
            backgroundImage: "url(utensils.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "100px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "180px",
            height: "150px",
            backgroundImage: "url(stove.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "100px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "180px",
            height: "150px",
            backgroundImage: "url(bath.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "100px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "180px",
            height: "150px",
            backgroundImage: "url(images.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "100px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </>
  );
};

export default MainTabLast;
