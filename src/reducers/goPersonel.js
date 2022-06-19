import { ADD_HANDLE_PERSONEL,ADD_ONE_PERSONEL,DELETE_PERSONEL,CLEAR_LIST } from "../actions/types";
import {mapKeys,omit} from "lodash"

const INITIAL_VALUES = {
    users:[],
    extraUsers:[]
}
export default function(state = INITIAL_VALUES, action) {
    switch (action.type) {
        case ADD_HANDLE_PERSONEL:
            return {...state, users:action.payload}
        case ADD_ONE_PERSONEL:
            return {...state,extraUsers:{...state.extraUsers,[action.payload.tc]:action.payload}}
        case DELETE_PERSONEL:
            if(action.payload.value in state.users.users){
                return {...state,["users"]:omit(state.users.users,action.payload)}
            }
        case CLEAR_LIST:
            return {...state,extraUsers:[],users:[]}
        default:
            return state;
    }
}