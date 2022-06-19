import {LOGIN_USER,LOGIN_ERROR} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, message:"Giriş başarılı"};
        case LOGIN_ERROR:
            return {...state,["message"]:action.payload};
        default:
            return state;
    }
}