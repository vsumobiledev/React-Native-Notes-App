import {
  LOAD_REVIEWS,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR
} from './constants';
import {
  LOAD_FILTERED_REVIEWS,
  LOAD_FILTERED_REVIEWS_SUCCESS,
  LOAD_FILTERED_REVIEWS_ERROR
} from '../../SearchBar/Layout/constants';

const initialState = {
  isLoading: false,
  reviews: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEWS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_FILTERED_REVIEWS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: action.reviews
      };
    case LOAD_REVIEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case LOAD_FILTERED_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: action.reviews
      };
    case LOAD_FILTERED_REVIEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
