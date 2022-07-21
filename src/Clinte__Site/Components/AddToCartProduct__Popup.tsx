import React from "react";
import { Link } from "react-router-dom";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import toast, { Toaster } from "react-hot-toast";
const AddToCartProduct__Popup = ({ value }: any) => {
  return (
    <div className="addToCartProductPopup">
      <div className="wrapper">
        <div className="wrapper__body">
          <div>
            <div className="introSection">
              <div className="img__file">
                <img src={value.img} alt="" />
              </div>
              <div className="text__file">
                <p>Product Name</p>
                <p>Has Been Added Your Wishlist</p>
              </div>
            </div>

            <div className="button__section">
              <Link
                to={"/cart"}
                className="button__mid_solid_color_black"
                onClick={() => toast.remove()}
              >
                View Cart
              </Link>
              <Link to={"/checkout"} className="button__mid_solid_color_black">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartProduct__Popup;
