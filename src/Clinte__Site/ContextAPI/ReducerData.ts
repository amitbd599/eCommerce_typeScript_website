export const shoppingCartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1, subTotal: 0 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter((c) => c.id !== action.payload.id),
      };

    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter((c) => c === action.payload),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist].filter((c) => c.id !== action.payload.id),
      };

    case "ADD_TO_COMPARE":
      return {
        ...state,
        compare: [...state.compare, { ...action.payload }],
      };

    case "REMOVE_FROM_COMPARE":
      return {
        ...state,
        compare: [...state.compare].filter((c) => c.id !== action.payload.id),
      };

    case "QUICK_VIEW_CLICK_VALUE":
      return {
        ...state,
        quickViewData: [action.payload],
      };

    case "GET_TOTAL":
      let { totalItem, subTotalAmount } = state.cart.reduce(
        (preValue: any, curValue: any) => {
          let { qty, price } = curValue;

          let updatesubTotalAmount = price * qty;

          preValue.subTotalAmount =
            preValue.subTotalAmount + updatesubTotalAmount;

          preValue.totalItem = preValue.totalItem + qty;

          return preValue;
        },
        { totalItem: 0, subTotalAmount: 0 }
      );
      return { ...state, totalItem, subTotalAmount };

    case "DECREASE_VALUE":
      let updateDecreaseValue = state.cart
        .map((curEle: any) => {
          if (curEle.id === action.payload) {
            return { ...curEle, qty: curEle.qty - 1 };
          }
          return curEle;
        })
        .filter((currElem: any) => currElem.qty !== 0);

      return { ...state, cart: updateDecreaseValue };

    case "INCREASE_VALUE":
      let updateIncreaseValue = state.cart.map((curEle: any) => {
        if (curEle.id === action.payload) {
          return { ...curEle, qty: curEle.qty + 1 };
        }
        return curEle;
      });

      return { ...state, cart: updateIncreaseValue };

    default:
      return state;
  }
};

//!  ============== Sorting Reducer ===============

export const sortItemsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "POPULARITY":
      return { ...state, popularity: !state.popularity };

    case "RATING":
      return { ...state, rating: action.payload };

    case "LATEST":
      return { ...state, latest: action.payload };

    case "LOW_TO_HIGH":
      return { ...state, sort: action.payload };

    case "HIGH_TO_LOW":
      return { ...state, sort: action.payload };

    case "DEFAULT_FILTER":
      return {
        popularity: false,
        rating: "",
        latest: "",
        lowToHigh: "",
        highToLow: "",
        searchQuery: "",
        stock: true,
      };

    default:
      return state;
  }
};
