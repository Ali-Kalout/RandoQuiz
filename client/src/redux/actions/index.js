import * as api from "./../../api/index";
import * as ActionTypes from "./../ActionTypes";

export const fetchQuiz = (form, history) => async (dispatch) => {
    dispatch({ type: ActionTypes.START_LOADING });
    try {
        const { data } = await api.fetchQuiz(form);

        dispatch({
            type: ActionTypes.FETCH_QUIZ,
            payload: data
        });

        history.push(`/${data.uuid}/?page=0`);
    } catch (error) {
        dispatch({
            type: ActionTypes.ERROR,
            payload: error.response.data.message
        });
    }
    dispatch({ type: ActionTypes.END_LOADING });
}