
import { INIT_USER, UPDATE_USER, UPDATE_FAILED, LOGOUT_USER, UPDATE_AVATAR } from './constants';

const initialState = {
    isLoading: false,
    isAvatarLoading: false,
    avatar: null,
    data: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case INIT_USER:
        return {
            ...state,
            isLoading: true,
            isAvatarLoading: true
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
            isLoading: false,
            isAvatarLoading: false,
            avatar: null
        };
    case UPDATE_AVATAR: 
        return {
            ...state,
            avatar: action.payload,
            isAvatarLoading: false
        };
    case LOGOUT_USER:
        return {
            ...state,
            avatar: null,
            data: null
        };
    default:
        return state;
    }
}