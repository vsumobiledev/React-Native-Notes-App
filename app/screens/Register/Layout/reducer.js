
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from './constants';

const initialState = {
    isLoading: false,
    user: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case REGISTER:
        return {
            ...state,
            isLoading: true
        };
    case REGISTER_FAILED:
        return {
            ...state,
            isLoading: false
        };
    case REGISTER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            user: action.user
        };
    default:
        return state;
    }
}