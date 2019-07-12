import { combineReducers } from "redux";
import alerts from "./alertReducer";


const rootReducer = combineReducers({
    alerts
});

export default rootReducer;