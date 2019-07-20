import { combineReducers } from "redux";
import alerts from "./alertReducer";
import Contact from "./ContactReducer";

const rootReducer = combineReducers({
    alerts,
    Contact
});

export default rootReducer;