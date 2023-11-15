import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: "30px" }}>
      <MDBFooter color="white" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <div className="center-content">
            <h5 className="title">E-Construct</h5>
            <p style={{ fontSize: "1.5rem" }}>
              Here you can use rows and columns here to organize your footer
              content.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default Footer;
