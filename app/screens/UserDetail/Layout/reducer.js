import { SUBSCRIBE, SUBSCRIBE_FAILED, SUBSCRIBE_SUCCESS } from './constants';

const initialState = {
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        isLoading: true
      };
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case SUBSCRIBE_FAILED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
