import user from "./user";
import contact from "./contact";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import {combineReducers} from "redux";

export default combineReducers({
    user, 
    contact,
    activeUserId,
    messages,
    typing
})