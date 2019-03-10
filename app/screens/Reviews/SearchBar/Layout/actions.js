import { LOAD_FILTERED_REVIEWS } from './constants';

export function loadFilteredReviews(filters) {
    return {
        type: LOAD_FILTERED_REVIEWS
    };
}