import React from "react";
import { connect } from "react-redux";


const CatList = ({ cats }) => {

  console.log(cats);

  const catsArray = Object.keys(cats);

  return (
    <ul>
      {catsArray.map((catId, index) => {
        console.log(catId)
        return (
          <li key={catId}>
            {cats[catId].name} is {cats[catId].activity}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(CatList)
