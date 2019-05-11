import { INIT_AUTH, AUTH_STATE_LOGIN, AUTH_STATE_NOT_LOGIN } from './constants';

const initialState = {
  isLoading: false,
  isLogin: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INIT_AUTH:
    return {
      ...state,
      isLoading: true
    };
  case AUTH_STATE_LOGIN:
    return {
      ...state,
      isLoading: false,
      isLogin: true
    };
  case AUTH_STATE_NOT_LOGIN:
    return {
      ...state,
      isLoading: false,
      isLogin: false
    };
  default:
    return state;
  }
}
