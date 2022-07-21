import React from "react";
import { Link } from "react-router-dom";
const AddWishlistTost = ({ text, link, button }: any) => {
  return (
    <>
      <div className="add__To__List__Tost">
        <div className="wrapper">
          <div className="wrapper__body">
            <p>{text}</p>
            <Link to={link} className="button__mid_solid_color_black">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWishlistTost;
