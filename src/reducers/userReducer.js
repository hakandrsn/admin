import {FETCH_USER,FETCH_USERS,FETCH_USER_ERROR,CREATE_USER,DELETE_USER,UPDATE_USER ,FETCH_DELETED_USERS } from "../actions/types";
import { mapKeys,omit } from "lodash";


const users = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_USERS:
            return { ...state,...mapKeys(action.payload, "_id")  };
        case CREATE_USER:
            return { ...state, [action.payload._id]:action.payload }
        case DELETE_USER:
            return  omit(state, action.payload)
        case UPDATE_USER:
            return { ...state,  [action.payload._id]: action.payload }
        default:
            return state;
    }
}

export default users;