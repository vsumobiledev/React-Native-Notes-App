import {
  UPDATE_USERS,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_FAILED
} from './constants';

const initialState = {
  isLoading: false,
  data: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_USERS:
    return {
      ...state,
      isLoading: true
    };
  case UPDATE_USERS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload
    };
  case UPDATE_USERS_FAILED:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
}
