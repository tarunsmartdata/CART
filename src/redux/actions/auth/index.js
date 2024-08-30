import {ACTION_TYPE} from '../../actionTypes';

/* Action called when remember me field is checked on the login page to save the user credentials in the redux store */
export const rememberUser = data => ({
  type: ACTION_TYPE.REMEMBER_USER,
  payload: data,
});
