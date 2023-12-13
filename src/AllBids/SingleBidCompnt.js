import React from "react";
import moment from "moment";
import { Box, Button, Card, Typography } from "@mui/material";
const SingleBidCompnt = (props) => {
  const gotoBidsonOffer = () => {
    localStorage.setItem("ReqID", props.id);
    window.location.href = "/biddedOffers";
  };
  return (
    // <div>
    //   <div className="container">
    //     <div class="card-features">
    //       <div class="card">
    //         <div class="card-horizontal">
    //           {/* <div class="img-square-wrapper">
    //             <img
    //               class="card-img"
    //               src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639053697/ConstructPak/maxresdefault_jdzobl.jpg"
    //               alt="Card image cap"
    //               style={{ width: "200px", height: "150px" }}
    //             />
    //           </div> */}
    //           <div class="card-body">
    //             <h4
    //               class="feature-heading"
    //               style={{ fontSize: "3rem", fontWeight: "bold" }}
    //             >
    //               {props.name}
    //             </h4>

    //             <p
    //               class="feature-detail"
    //               style={{ fontSize: "1.5rem", width: "100%" }}
    //             >
    //               {props.description}
    //               <i
    //                 class="fa fa-check-circle icon"
    //                 style={{ fontSize: "30px" }}
    //               ></i>
    //             </p>
    //             <label style={{ fontSize: "1.5rem" }}>
    //               Status:
    //               <span style={{ color: "green", fontWeight: "bold" }}>
    //                 {props.status}
    //               </span>
    //             </label>
    //             <button
    //               onClick={gotoBidsonOffer}
    //               style={{
    //                 float: "right",
    //                 fontSize: "1.5rem",
    //                 border: "none",
    //                 backgroundColor: "#393E46",
    //                 color: "white",
    //                 padding: "5px",
    //                 borderRadius: "5px",
    //               }}
    //             >
    //               View Offers
    //             </button>
    //           </div>
    //         </div>
    //         <div class="card-footer">
    //           <small class="text-muted" style={{ fontSize: "2rem" }}>
    //             {props.created}
    //           </small>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Card sx={{ display: "flex", gap: "10px", width: "30%", maxHeight: "10%" }}>
      <img
        class="card-img"
        src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639053697/ConstructPak/maxresdefault_jdzobl.jpg"
        alt="Card image cap"
        style={{ width: "200px", height: "154px" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "100%",
        }}
      >
        <Box sx={{ marginTop: "11px" }}>
          <Typography variant="h6">
            <b>{props.name}</b>
          </Typography>
          <Typography variant="h6" style={{ fontSize: "1.5rem" }}>
            Status: <b>{props.status}</b>
          </Typography>
          <Typography variant="h6" style={{ fontSize: "2rem" }}>
            {props.created}
          </Typography>
        </Box>
        <Button
          onClick={gotoBidsonOffer}
          sx={{
            fontSize: "1.5rem",
            border: "none",
            backgroundColor: "#393E46",
            color: "white",
            padding: "5px",
            borderRadius: "5px 0px 0px 0px",
            width: "30%",
            marginLeft: "20%",
            marginTop: "10%",
            "&:hover": {
              backgroundColor: "#8C8C8C",
              color: "white",
            },
          }}
        >
          View Offers
        </Button>
      </Box>
    </Card>
  );
};

export default SingleBidCompnt;
