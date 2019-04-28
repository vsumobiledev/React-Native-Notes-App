import { UPDATE_NOTIFICATIONS_SUCCESS, INIT_NOTIFICATIONS } from './constants';

const initialState = {
  isLoading: false,
  data: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  }
}
