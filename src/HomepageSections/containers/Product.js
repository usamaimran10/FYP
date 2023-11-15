import React from "react";
import "./Product.css";

const Product = () => {
  const GotoCategoryPage = () => {
    window.location.href = "/AllProductsPage";
  };
  return (
    <div className="Product">
      <button
        className="btn btn-primary"
        style={{
          color: "white",
          backgroundColor: "#393E46",
          fontSize: "2rem",
          border: "none",
          borderRadius: "5px",

          padding: "10 auto",
          float: "right",
        }}
        onClick={GotoCategoryPage}
      >
        See All Products
      </button>
      <div className="row">
        <div className="col-7 grid">
          <div
            className="fill"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/niaxeecomsats/image/upload/v1638382196/ConstructPak/pvc-sewage-pipes_isygfx.jpg)",
            }}
          ></div>

          <div
            className="fill"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/niaxeecomsats/image/upload/v1638383669/ConstructPak/Types-of-bricks-used-in-construction-B-17-06-1024x640_kgv9sz.jpg)",
            }}
          ></div>

          <div
            className="fill"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/niaxeecomsats/image/upload/v1638383829/ConstructPak/glass-reality-glass-trade-fair_bxzmr7.jpg)",
            }}
          ></div>

          <div
            className="fill"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/niaxeecomsats/image/upload/v1638383937/ConstructPak/download_1_avisr7.jpg)",
            }}
          ></div>
        </div>

        <div className="col-5">
          <div className="card" style={{ width: "400px" }}>
            <img className="product-card fill" />
            <button
              className="btn"
              style={{
                fontSize: "2REM",
                backgroundColor: "#393E46",
                color: "#EEEEEE",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
