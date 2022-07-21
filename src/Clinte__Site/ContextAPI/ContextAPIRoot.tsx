import React, { useReducer, useState, useContext } from "react";
import { sortItemsReducer, shoppingCartReducer } from "./ReducerData";
import ShopProduct from "../Script/ShopProduct";
import AddToCartTost from "../Common/TostMassage/AddToCartTost";
import { toast } from "react-toastify";
import AddWishlistTost from "../Common/TostMassage/AddWishlistTost";

const ContextAPI = React.createContext<any>(null);

const ContextAPIRoot = ({ children }: any) => {
  const [cartReducer, dispatch] = useReducer(shoppingCartReducer, {
    product: ShopProduct,
    cart: [],
    wishlist: [],
    wishlistPopup: [],
    compare: [],
    quickViewData: [],
    count: 3,
    totalItem: 0,
    subTotalAmount: 0,
  });

  const [sortReducer, sortDispatch] = useReducer(sortItemsReducer, {
    popularity: false,
    rating: "",
    latest: "",
  });

  console.log(sortReducer);

  //! Add to Cart
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
    toast(
      <AddWishlistTost
        text={"Add to Wish List Product Successful"}
        link={"/wishlist"}
        button={"View Wishlist"}
      />,
      {
        position: "bottom-left",
        autoClose: 4000,
      }
    );
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
    toast(
      <AddWishlistTost
        text={"Add to Compare Product Successful"}
        link={"/compare"}
        button={"View Compare"}
      />,
      {
        position: "bottom-left",
        autoClose: 4000,
      }
    );
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
  //! IncreaseValue cart items value

  let increaseValue: (id: any) => void;
  increaseValue = (id: any) => {
    dispatch({
      type: "INCREASE_VALUE",
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

  // !============ Filter Function =============

  // ! Popularity Filter Function

  let popularityFilterFun: (id: any) => void;
  popularityFilterFun = (id: any) => {
    dispatch({
      type: "POPULARITY",
      payload: id,
    });
  };

  // ! Rating Filter Function

  let ratingFilterFun: (id: any) => void;
  ratingFilterFun = (id: any) => {
    dispatch({
      type: "RATING",
      payload: id,
    });
  };

  // ! Latest Filter Function

  let latestFilterFun: (id: any) => void;
  latestFilterFun = (id: any) => {
    dispatch({
      type: "LATEST",
      payload: id,
    });
  };

  //! Low To High Filter Function

  let lowToHighFilterFun: (id: any) => void;
  lowToHighFilterFun = (id: any) => {
    dispatch({
      type: "LOW_TO_HIGH",
      payload: id,
    });
  };

  // ! High To Low Filter Function

  let highToLowFilterFun: (id: any) => void;
  highToLowFilterFun = (id: any) => {
    dispatch({
      type: "HIGH_TO_LOW",
      payload: id,
    });
  };

  // ! Search Query Filter Function

  let searchQueryFilterFun: (id: any) => void;
  searchQueryFilterFun = (id: any) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: id,
    });
  };

  // ! Stock Filter Function

  let stockFilterFun: (id: any) => void;
  stockFilterFun = (id: any) => {
    dispatch({
      type: "STOCK",
      payload: id,
    });
  };

  //! =========== Return Main Context File ==========

  return (
    <ContextAPI.Provider
      value={{
        cartReducer,
        dispatch,
        addToCart,
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
        decreaseValue,
        increaseValue,
        sortReducer,
        sortDispatch,
        popularityFilterFun,
        ratingFilterFun,
        latestFilterFun,
        lowToHighFilterFun,
        highToLowFilterFun,
        searchQueryFilterFun,
        stockFilterFun,
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
