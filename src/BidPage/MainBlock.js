import React from "react";

const MainBlock = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          width: "600px",
          height: "300px",
          backgroundColor: "#393e46",
          marginTop: "20px",

          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <label
          style={{
            color: "#AAD8D3",
            fontWeight: "bold",

            fontSize: "30px",
            marginTop: "20px",
          }}
        >
          Make A Request
        </label>
        <p style={{ color: "#AAD8D3", marginTop: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          justo sed ipsum tempus elementum. Nunc posuere pretium diam, eu
          posuere nulla ullamcorper ut. Quisque accumsan vestibulum dolor. Cras
          hendrerit eget purus id scelerisque. Ut vehicula mauris eget ligula
          bibendum, interdum commodo justo mollis. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Ut molestie
          arcu ac euismod congue. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
      </div>
    </div>
  );
};

export default MainBlock;
