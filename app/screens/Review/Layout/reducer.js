import {
  SAVE_REVIEW,
  SAVE_REVIEW_ERROR,
  PRELOAD_REVIEW,
  PRELOAD_REVIEW_SUCCESS,
  PRELOAD_REVIEW_ERROR,
  DELETE_REVIEW,
  DELETE_REVIEW_ERROR
} from './constants';

const initialState = {
  isLoading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SAVE_REVIEW:
    return {
      ...state,
      isLoading: true
    };
  case SAVE_REVIEW_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  case DELETE_REVIEW:
    return {
      ...state,
      isLoading: true
    };
  case DELETE_REVIEW_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  case PRELOAD_REVIEW:
    return {
      ...state,
      isLoading: true
    };
  case PRELOAD_REVIEW_SUCCESS:
    return {
      ...state,
      isLoading: false,
      review: action.review,
      userRating: action.userRating
    };
  case PRELOAD_REVIEW_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
}
