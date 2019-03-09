
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from './constants';

const initialState = {
    isLoading: false,
    user: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            isLoading: true
        };
    case LOGIN_FAILED:
        return {
            ...state,
            isLoading: false
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            isLoading: false,
            user: action.user
        };
    default:
        return state;
    }
}