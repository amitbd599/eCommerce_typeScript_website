import React from "react";
import { Link } from "react-router-dom";
const AddWishlistTost = ({ value }: any) => {
  return (
    <>
      <div className="add__To__List__Tost">
        <div className="wrapper">
          <div className="wrapper__body">
            <p>Add to Wish List Product Successful</p>
            <Link to={"/wishlist"} className="button__mid_solid_color_black">
              View Wishlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWishlistTost;
