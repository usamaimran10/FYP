import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const MainTabReverse = (props) => {
  return (
    <>
      <div>
        <label
          style={{
            fontWeight: "bold",
            width: "100%",
            marginLeft: "30px",
            marginTop: "30px",
            fontSize: "3rem",
            color: "#393E46",

            textOrientation: "sideways",
          }}
        >
          {props.name}
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="container"
          style={{
            width: "180px",
            height: "150px",
            backgroundImage: "url(Paint.jpg)",
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
            backgroundImage: "url(colora.jpeg)",
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
            backgroundImage: "url(red.jpg)",
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
            backgroundImage:
              "url(https://res.cloudinary.com/niaxeecomsats/image/upload/v1639082390/ConstructPak/maxresdefault_1_zac6w0.jpg)",
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
            width: "500px",
            height: "300px",
            backgroundImage: "url(painter.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "20px",
            marginLeft: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </>
  );
};

export default MainTabReverse;
