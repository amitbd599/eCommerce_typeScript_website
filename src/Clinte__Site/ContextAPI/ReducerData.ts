export const shoppingCartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 2 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter((c) => c !== action.payload),
      };

    case "DECREASE_VALUE":
      return { ...state, cart: [...state.cart, { qty: 10 }] };

    // return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
