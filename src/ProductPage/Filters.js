import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../Store/filter";

const Filters = (props) => {
  const searchFilter = () => {
    console.log(rating);
  };
  console.log(props.name);
  const [dropdown, setDropdown] = useState(false);
  const [rating, setRating] = useState(0);
  const [city, setCity] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  dispatch(filterActions.set({ rating, city, isEnabled }));
  const gotoCategory = () => {
    window.location.href = "/categoriesPage";
  };
  // setCity("Lahore");
  // setIsEnabled(true);
  //const { rating, city, isEnabled } = useSelector((state) => state.filter);

  return (
    <>
      <div style={{ margin: "20px" }}>
        <button
          style={{
            fontSize: "2rem",
            backgroundColor: "#393E46",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={gotoCategory}
        >
          {props.name}
        </button>
      </div>

      {/* <div>
        <select name="Location" id="Location" required>
          <option value="" disabled selected>
            Select The City
          </option>
          <option value="Islamabad">Islamabad</option>
          <option value="" disabled>
            Punjab Cities
          </option>
          <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
          <option value="Ahmadpur East">Ahmadpur East</option>
          <option value="Ali Khan Abad">Ali Khan Abad</option>
          <option value="Alipur">Alipur</option>
          <option value="Arifwala">Arifwala</option>
          <option value="Attock">Attock</option>
          <option value="Bhera">Bhera</option>
          <option value="Bhalwal">Bhalwal</option>
          <option value="Bahawalnagar">Bahawalnagar</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Bhakkar">Bhakkar</option>
          <option value="Burewala">Burewala</option>
          <option value="Chillianwala">Chillianwala</option>
          <option value="Chakwal">Chakwal</option>
          <option value="Chichawatni">Chichawatni</option>
          <option value="Chiniot">Chiniot</option>
        </select>
      </div> */}
    </>
  );
};

export default Filters;
