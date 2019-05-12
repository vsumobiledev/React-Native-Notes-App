import {
  SUBSCRIBE,
  SUBSCRIBE_FAILED,
  SUBSCRIBE_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  INIT_USER_DETAIL,
  UPDATE_USER_DETAIL,
  UPDATE_DETAIL_FAILED
} from './constants';

const initialState = {
  isLoading: false,
  isDataLoading: true,
  data: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SUBSCRIBE:
  case DELETE_USER:
    return {
      ...state,
      isLoading: true
    };
  case SUBSCRIBE_SUCCESS:
  case SUBSCRIBE_FAILED:
  case DELETE_USER_FAILED:
  case DELETE_USER_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case INIT_USER_DETAIL:
    return {
      ...state,
      isDataLoading: true
    };
  case UPDATE_USER_DETAIL:
    return {
      ...state,
      data: action.payload,
      isDataLoading: false
    };
  case UPDATE_DETAIL_FAILED:
    return {
      ...state,
      isDataLoading: false
    };
  default:
    return state;
  }
}
