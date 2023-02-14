import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    newFile: [],
    files: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload);
    switch (action.type) {
        // Write you case here
        case actionTypes.CREATE_FILE:
            return {
                ...state,
                newFile: action.payload,
            }
        case actionTypes.GET_CHILDREN_FILES:
            return {
                ...state,
                files: action.payload,
            }
        default:
            return state;
    }
}