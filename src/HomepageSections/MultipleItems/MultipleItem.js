import React, { useState, useEffect } from "react";
import "./MultipleItem.css";
import Slider from "./Slider/Slider";
import Card from "./Card/Card";
import { GiMagicTrident } from "react-icons/gi";

const MultipleItem = () => {
  const GotoCategoryPage = () => {
    window.location.href = "/categoriesPage";
  };
  const GotoProfessionalPage = () => {
    window.location.href = "/professionalCateg";
  };
  const GotoLaborPage = () => {
    window.location.href = "/SoloCateg";
  };

  const [IndexNumber, setIndexNumber] = useState(2);

  const plusSlide = (n) => {
    setIndexNumber(IndexNumber + n);
  };

  useEffect(() => {
    if (IndexNumber > 3) {
      setIndexNumber(1);
    }
    if (IndexNumber < 1) {
      setIndexNumber(3);
    }
  }, [plusSlide]);

  return (
    <>
      <div className="MultipleItems">
        <div></div>

        <Slider pos={IndexNumber}>
          <Card
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638291642/ConstructPak/610c7297df7f1_mhralo.jpg"
            text="Products"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />

          <Card
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638291474/ConstructPak/macro-manager-1024x683_d1qa5x.jpg"
            text="Professionals"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
          <Card
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638291578/ConstructPak/careerbuilder-original-3580_f3xf0d.jpg"
            text="Solo Labors"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
        </Slider>

        <a className="prev" onClick={() => plusSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlide(1)}>
          &#10095;
        </a>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <button
          className="btn-primary"
          onClick={GotoCategoryPage}
          style={{
            fontSize: "1.8rem",
            border: "none",
            borderRadius: "5PX",
            padding: "10px",
            backgroundColor: "#393E46",
            marginTop: "30px",
          }}
        >
          Go to Product Page
        </button>
        <button
          className="btn-primary"
          onClick={GotoLaborPage}
          style={{
            fontSize: "1.8rem",
            border: "none",
            borderRadius: "5PX",
            padding: "10px",
            backgroundColor: "#393E46",
            marginTop: "30px",
            marginLeft: "10px",
          }}
        >
          Go to Solo Labor Page
        </button>
        <button
          className="btn-primary"
          onClick={GotoProfessionalPage}
          style={{
            fontSize: "2rem",
            border: "none",
            borderRadius: "5PX",
            padding: "10px",
            backgroundColor: "#393E46",
            marginTop: "30px",
            marginLeft: "10px",
          }}
        >
          Go to Professional Page
        </button>
      </div>
    </>
  );
};

export default MultipleItem;
