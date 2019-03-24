import { INIT_TAGS, UPDATE_TAGS, UPDATE_TAGS_FAILED } from './constants';

const initialState = {
  data: {},
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INIT_TAGS:
    return {
      ...state,
      isLoading: true
    };
  case UPDATE_TAGS_FAILED:
    return {
      ...state,
      isLoading: false
    };
  case UPDATE_TAGS:
    return {
      ...state,
      isLoading: false,
      data: action.payload
    };
  default:
    return state;
  }
}
