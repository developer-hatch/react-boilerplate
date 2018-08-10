import {TYPE} from "../actions/constants";

export default function(state=null, action) {
    switch (action.type) {
        case TYPE.ANIMAL_CLICKED:
            console.log(action);
            return action.payload;
        default:
            return state
    }
}
