
import { INIT_USER, UPDATE_USER, UPDATE_FAILED, LOGOUT_USER } from './constants';

const initialState = {
    isLoading: false,
    data: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case INIT_USER:
        return {
            ...state,
            isLoading: true
        };
    case UPDATE_USER:
        return {
            ...state,
            isLoading: false,
            data: action.payload
        };
    case UPDATE_FAILED:
        return {
            ...state,
            isLoading: false
        };
    case LOGOUT_USER:
        return {
            ...state,
            data: null
        };
    default:
        return state;
    }
}