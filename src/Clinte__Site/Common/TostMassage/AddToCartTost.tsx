import React from "react";
import { Link } from "react-router-dom";
const AddToCartTost = ({ value }: any) => {
  return (
    <>
      <div className="addToCartTost">
        <div className="wrapper">
          <div className="wrapper__body">
            <div className="introSection">
              <div className="img__file">
                <img src={value.img} alt="" />
              </div>
              <div className="text__file">
                <h3>{value.name.slice(0, 30)} ...</h3>
                <p>Has Been Added Cart</p>
              </div>
            </div>

            <div className="button__section">
              <Link to={"/cart"} className="button__mid_solid_color_black">
                View Cart
              </Link>
              <Link to={"/checkout"} className="button__mid_solid_color_black">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartTost;
