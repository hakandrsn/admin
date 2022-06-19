import { FETCH_COMPANİE, FETCH_COMPANİES, FETCH_COMPANİE_ERROR, CREATE_COMPANİE, DELETE_COMPANİE, UPDATE_COMPANİE } from "../actions/types";
import { mapKeys,omit } from "lodash";


const companies = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMPANİE:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_COMPANİES:
            return { ...state,...mapKeys(action.payload, "_id")  };
        case FETCH_COMPANİE_ERROR:
            return { ...state, ["error"]: action.payload }
        case CREATE_COMPANİE:
            return { ...state, [action.payload._id]:action.payload }
        case DELETE_COMPANİE:
            return  omit(state, action.payload)
        case UPDATE_COMPANİE:
            return { ...state,  company: action.payload }
        default:
            return state;
    }
}

export default companies;