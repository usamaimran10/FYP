import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../Store/filter";
import { render } from "react-dom";

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
      <h1 style={{ fontSize: "3rem", marginTop: "20PX" }}>Filters</h1>
      <div className="dropdown">
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
        <div
          className={`dropdown-menu ${dropdown ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton"
        >
          <a className="dropdown-item" href="#">
            Delete
          </a>
          <a className="dropdown-item" href="#">
            Pin to your Profile
          </a>
        </div>
      </div>

      <div
        class="form-check form-switch"
        style={{ fontSize: "2rem", marginTop: "20px", size: "30px" }}
      >
        <input
          style={{ width: "20px", height: "20px" }}
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label
          class="form-check-label"
          for="flexSwitchCheckDefault"
          style={{ marginLeft: "20px" }}
        >
          Discount
        </label>
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

      <div style={{ marginTop: "15px" }}>
        <label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Rating</label>
        <input
          type="text"
          placeholder="1-5"
          style={{ width: "40px", marginLeft: "10px", fontSize: "1.5rem" }}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          value={rating}
        />
        <ReactStars count={5} size={24} activeColor="#ffd700" />
      </div>
      <button
        onClick={searchFilter}
        className="btn btn-primary"
        style={{ fontSize: "1.5rem" }}
      >
        Search
      </button>
    </>
  );
};

export default Filters;
