import {
  UPLOAD_REVIEW,
  UPLOAD_REVIEW_SUCCESS,
  UPLOAD_REVIEW_ERROR
} from './constants';

const initialState = {
  isLoading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_REVIEW:
      return {
        ...state,
        isLoading: true
      };
    case UPLOAD_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case UPLOAD_REVIEW_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
