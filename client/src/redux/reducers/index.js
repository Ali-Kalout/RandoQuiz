import * as ActionTypes from "./../ActionTypes";

export const STATE = (state = {
    uuid: "",
    questions: [],
    answers: {},
    results: {},
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

        case ActionTypes.CHOOSE_ANSWER:
            const { questionIndex, answer } = action.payload;
            return { ...state, answers: { ...state.answers, [questionIndex]: answer } };

        case ActionTypes.SUBMIT_QUIZ:
            return { ...state, results: action.payload };

        default:
            return state;
    }
}