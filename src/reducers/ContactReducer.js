import update from "immutability-helper";
import * as ACTION_TYPES from "../constants/actionTypes";

const getInitialState = ({
    feedback:[]
});

const Contact = (state = getInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_FEEDBACK_DATA:
            return update(state, {
                feedback : {
                        $set: action.mock
                    }
            })
        default : 
            return state;
    }
}

export default Contact;