import React, { useEffect } from "react";
import { array } from "./API";
import Productlist from "./Productlist";
import axios from "axios";
const ProductCmpt = () => {
  return (
    <>
      <div>
        {array.map((user, i) => {
          return (
            <div className="col-md-4">
              <Productlist
                src={array[i].source}
                title={array[i].Title}
                detail={array[i].Detail}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCmpt;
