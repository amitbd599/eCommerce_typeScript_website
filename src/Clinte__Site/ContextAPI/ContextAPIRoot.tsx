import React, { createContext, useReducer, useState, useContext } from "react";
import { shoppingCartReducer } from "./ReducerData";
import ShopProduct from "../Script/ShopProduct";
import AddToCartTost from "../Common/TostMassage/AddToCartTost";
import { ToastContainer, toast } from "react-toastify";
import AddWishlistTost from "../Common/TostMassage/AddWishlistTost";

const ContextAPI = React.createContext<any>(null);

const ContextAPIRoot = ({ children }: any) => {
  // =====================
  const [Popup, setPopup] = useState(false);
  const [cartReducer, dispatch] = useReducer(shoppingCartReducer, {
    product: ShopProduct,
    cart: [],
    wishlist: [],
    wishlistPopup: [],
    compare: [],
    quickViewData: [],
    count: 0,
  });

  //! Add to Cart Onclick
  let addToCart: (value: any) => void;
  addToCart = (value: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: value,
    });

    toast(<AddToCartTost value={value} />, {
      position: "bottom-left",
      autoClose: 4000,
    });
  };

  //! Remove From Cart

  let removeFromCart: (value: any) => void;
  removeFromCart = (value: any) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: value,
    });
  };

  //! Remove All From Cart

  let removeAllFromCart: () => void;
  removeAllFromCart = () => {
    dispatch({
      type: "REMOVE_ALL_FROM_CART",
      payload: [],
    });
  };

  //! cart Side Toggle
  const [cartSideActive, setCartSideActive] = useState(false);
  let cartSide: () => void;
  cartSide = () => {
    setCartSideActive(!cartSideActive);
  };

  //! Add to Wishlist
  let addToWishlist: (value: any) => void;
  addToWishlist = (value: any) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: value,
    });
    toast(<AddWishlistTost value={value} />, {
      position: "bottom-left",
      autoClose: 4000,
    });
  };

  //! Remove From Wishlist
  let removeFromWishlist: (value: any) => void;
  removeFromWishlist = (value: any) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: value,
    });
  };

  //! Add to Compare
  let addToCompare: (value: any) => void;
  addToCompare = (value: any) => {
    dispatch({
      type: "ADD_TO_COMPARE",
      payload: value,
    });
    toast(<AddWishlistTost value={value} />, {
      position: "bottom-left",
      autoClose: 4000,
    });
  };

  //! Remove From Compare
  let removeFromCompare: (value: any) => void;
  removeFromCompare = (value: any) => {
    dispatch({
      type: "REMOVE_FROM_COMPARE",
      payload: value,
    });
  };

  //! DecreaseValue cart items value

  let decreaseValue: (id: any) => void;
  decreaseValue = (id: any) => {
    dispatch({
      type: "DECREASE_VALUE",
      payload: id,
    });
  };

  //! Quick View Function Count Here...
  const [activeQuickViewClick, setActiveQuickViewClick] = useState(false);
  let quickViewClick: (value: any) => void;
  quickViewClick = (value: any) => {
    dispatch({
      type: "QUICK_VIEW_CLICK_VALUE",
      payload: value,
    });
    setActiveQuickViewClick(!activeQuickViewClick);
  };

  // =====================

  // Cart Item IncreaseValue and DecreaseValue add Function
  const [hold, setHold] = useState(0); // ------
  let hendelIncrease: () => void;
  hendelIncrease = () => {
    setHold(hold + 1);
  };
  let hendelDecrease: () => void;
  hendelDecrease = () => {
    if (hold > 0) {
      setHold(hold - 1);
    }
  };
  return (
    <ContextAPI.Provider
      value={{
        cartReducer,
        dispatch,
        addToCart,
        decreaseValue,
        removeFromCart,
        removeAllFromCart,
        cartSide,
        cartSideActive,
        quickViewClick,
        activeQuickViewClick,
        addToWishlist,
        removeFromWishlist,
        addToCompare,
        removeFromCompare,
        Popup,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPIRoot;

export const UseCartState = () => {
  return useContext(ContextAPI);
};
