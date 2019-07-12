import update from "immutability-helper";
import * as ACTION_TYPES from "../constants/actionTypes";

const getInitialState = ({
    messages:[]
});

const alerts = (state = getInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ALERT_SUCCESS:
            return update(state, {
                messages : {
                        $set: action.alerts
                    }
            })
            case ACTION_TYPES.SNOOZE_ALERT_SUCCESS:
            return update(state, {
                messages : {
                        $set: action.alerts
                    }
            })
            case ACTION_TYPES.DISMISS_ALERT_SUCCESS:
            return update(state, {
                messages : {
                        $set: action.alerts
                    }
            })
        default : 
            return state;
    }
}

export default alerts;