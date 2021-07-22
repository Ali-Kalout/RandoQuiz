import * as ActionTypes from "./../ActionTypes";

export const STATE = (state = {
    uuid: "",
    questions: [],
    answers: [],
    isLoading: false,
    error: "",
    fullName: ""
}, action) => {
    switch (action.type) {
        case ActionTypes.START_LOADING:
            return { ...state, isLoading: true, error: "" };

        case ActionTypes.END_LOADING:
            return { ...state, isLoading: false };

        case ActionTypes.ERROR:
            return { ...state, error: action.payload };

        case ActionTypes.FETCH_QUIZ:
            return {
                ...state,
                questions: action.payload.questions,
                fullName: action.payload.name,
                uuid: action.payload.uuid
            };

        default:
            return state;
    }
}