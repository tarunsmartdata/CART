import {ACTION_TYPE} from '../../actionTypes';

const initialState = {
  cartItem: [],
};

function dashReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART:
      if (state.cartItem.length > 0) {
        const existingItemIndex = state.cartItem.findIndex(
          item => item.id === action.payload?.id,
        );

        if (existingItemIndex !== -1) {
          const newCartItems = [...state.cartItem];
          newCartItems[existingItemIndex] = {
            ...newCartItems[existingItemIndex],
            quantity: newCartItems[existingItemIndex].quantity + 1,
          };
          return {
            ...state,
            cartItem: newCartItems,
          };
        } else {
          const newItem = {...action.payload, quantity: 1};
          return {
            ...state,
            cartItem: [...state.cartItem, newItem],
          };
        }
      }
      const newItem = {...action.payload, quantity: 1};
      return {
        ...state,
        cartItem: [...state.cartItem, newItem],
      };

    case ACTION_TYPE.DELETE_FROM_CART: {
      const index = state.cartItem.findIndex(
        item => item.id === action.payload?.item?.id,
      );

      if (index === -1) {
        return state;
      }

      const newCartItem = [...state.cartItem];
      newCartItem.splice(index, 1);

      return {
        ...state,
        cartItem: newCartItem,
      };
    }

    default:
      return state;
  }
}

export default dashReducer;
