import {ACTION_TYPE} from '../../actionTypes';

const initialState = {
  userCreds: {}, // User details
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_LOGIN:
      return {...state, userCreds: action.payload};
    default:
      return state;
  }
}
export default authReducer;
