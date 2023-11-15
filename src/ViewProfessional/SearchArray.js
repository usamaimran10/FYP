import React from "react";

const SearchArray = (props) => {
  return (
    <div>
      {props.searchResult.map((item, index) => (
        <div>
          <h1>{item.title}</h1>
          <h1>{item.derail}</h1>
        </div>
      ))}
    </div>
  );
};

export default SearchArray;
