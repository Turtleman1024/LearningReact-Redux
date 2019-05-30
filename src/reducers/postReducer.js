import { FETCH_POSTS, NEW_POST } from '../actions/types';
import { statements } from '@babel/template';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_POSTS:
            return {
                ...statements,
                items: action.payload
            }
        default:
            return state;

    }
}