import { combineReducers } from "redux";
import users from "./userReducer";
import companies from "./companyReducer";
import scores from "./scoreReducer";
import goPersonel from "./goPersonel";
import auth from "./authReducer";

export default combineReducers({
    users,
    companies,
    scores,
    goPersonel,
    auth
})