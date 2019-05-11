import {
  LOAD_RATING,
  LOAD_RATING_ERROR,
  LOAD_RATING_SUCCESS
} from './constants';

const initialState = {
  isLoading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_RATING:
    return {
      ...state,
      isLoading: true
    };
  case LOAD_RATING_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  case LOAD_RATING_SUCCESS:
    return {
      ...state,
      isLoading: false,
      rating: action.rating
    };
  default:
    return state;
  }
}
