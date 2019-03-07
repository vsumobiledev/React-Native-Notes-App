
import { LOAD_REVIEWS } from './constants';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case LOAD_REVIEWS:
        return state;
    default:
        return state;
    }
}