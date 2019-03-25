import {
  INIT_TAGS,
  UPDATE_TAGS,
  UPDATE_TAGS_FAILED,
  ADD_TAG,
  ADD_TAG_FAILED,
  ADD_TAG_SUCCESS
} from './constants';

const initialState = {
  data: {},
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TAG:
  case INIT_TAGS:
    return {
      ...state,
      isLoading: true
    };
  case ADD_TAG_FAILED:
  case UPDATE_TAGS_FAILED:
    return {
      ...state,
      isLoading: false
    };
  case ADD_TAG_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: {
        ...state.data,
        ...action.payload
      }
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
