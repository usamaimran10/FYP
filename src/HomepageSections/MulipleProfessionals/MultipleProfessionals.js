import React, { useState, useEffect } from "react";
import "./MultipleItem.css";
import Slider from "./Slider/Slider";
import Card from "./Card/Card";

const MultipleItem = () => {
  const GotoCategoryPage = () => {
    console.log("going to cat");
    window.location.href = "/professionalCateg";
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
        <div>
          <button
            className="btn btn-primary"
            style={{
              color: "white",
              backgroundColor: "#393E46",
              fontSize: "2rem",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              marginRight: "20px",

              padding: "10 auto",
              float: "right",
            }}
            onClick={GotoCategoryPage}
          >
            Go to Professionals page
          </button>
        </div>

        <Slider pos={IndexNumber}>
          <Card
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384039/ConstructPak/The_Difference_Between_a_Project_Manager_and_a_Construction_Manager_o1mlge.jpg"
            text="Ali"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
          <Card
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384040/ConstructPak/162_hr_construction_manager_jsepz4.jpg"
            text="Ahmed"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
          <Card
            style={{ height: "80%" }}
            imgSrc="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384040/ConstructPak/nu_mba_-_longform_how_to_become_a_construction_project_manager_ivyujc.jpg"
            text="Abdullah"
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
    </>
  );
};

export default MultipleItem;
