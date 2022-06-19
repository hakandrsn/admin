import {
    ADD_WORKER,
    FETCH_SCORE,
    FETCH_SCORES,
    GET_COMPANYID,
    CREATE_SCORE,
    DELETE_WORKER, DELETE_WORK, UPDATE_WORKER, UPDATE_WORK
} from "../actions/types"
import { mapKeys,omit } from "lodash";
const scores = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SCORES:
            return { ...state, ...mapKeys(action.payload, "_id") };
        case FETCH_SCORE:
            return { ...state, [action.payload._id]: action.payload };
        case UPDATE_WORK:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_WORK:
            return omit(state, action.payload);
        case ADD_WORKER:
            return { ...state, [action.payload._id]: action.payload };
        // case DELETE_WORKER:
        //     return omit(state.users, action.payload);
        case UPDATE_WORKER:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_SCORE:
            return { ...state, [action.payload._id]: action.payload };
        default:
            return state;
    }
}

export default scores