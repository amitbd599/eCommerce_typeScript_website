export const shoppingCartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 2 }] };

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

    case "DECREASE_VALUE":
      return { ...state, cart: [...state.cart, { qty: 10 }] };

    // return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
