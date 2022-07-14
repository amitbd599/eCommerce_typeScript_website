import React, { createContext, useReducer, useState, useContext } from "react";
import { shoppingCartReducer } from "./ReducerData";
import ShopProduct from "../Script/ShopProduct";
const ContextAPI = React.createContext<any>(null);

const ContextAPIRoot = ({ children }: any) => {
  // =====================

  const [cartReducer, dispatch] = useReducer(shoppingCartReducer, {
    product: ShopProduct,
    cart: [],
    count: 0,
    // qty: 2,
  });

  // Add to Cart Onclick
  let addToCart: (value: any) => void;
  addToCart = (value: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: value,
    });
  };

  // DecreaseValue cart items value

  let decreaseValue: (id: any) => void;
  decreaseValue = (id: any) => {
    dispatch({
      type: "DECREASE_VALUE",
      payload: id,
      // qty: id.target.value,
    });
  };

  // Remove From Cart

  let removeFromCart: (value: any) => void;
  removeFromCart = (value: any) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: value,
    });
  };

  // cart Side Toggle
  const [cartSideActive, setCartSideActive] = useState(false);
  let cartSide: () => void;
  cartSide = () => {
    setCartSideActive(!cartSideActive);
  };
  // =====================

  // Quick View Function Count Here...
  const [active, setActive] = useState(false);
  let quickViewClick: () => void;
  quickViewClick = () => {
    setActive(!active);
  };

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
        cartSide,
        cartSideActive,
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
