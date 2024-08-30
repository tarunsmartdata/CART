import {ACTION_TYPE} from '../../actionTypes';

export const AddToCartRedux = data => ({
  type: ACTION_TYPE.ADD_TO_CART,
  payload: data,
});

export const DeleteFromCartRedux = data => ({
  type: ACTION_TYPE.DELETE_FROM_CART,
  payload: data,
});

export function addToCartApi(item_id) {
  return async (dispatch, getState) => {
    try {
      fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: item_id,
              quantity: 4,
            },
          ],
        }),
      }).then(res => res.json());
    } catch (error) {
      console.log(error);
    }
  };
}
