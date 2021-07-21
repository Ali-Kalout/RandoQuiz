import axios from "axios";

const getQuiz = async (form) => {
    const { nbQuestions, category, difficulty } = form;
    const quiz = await axios.get(
        `https://opentdb.com/api.php?amount=${nbQuestions}&category=${category}&difficulty=${difficulty}`
    );
    return quiz.data;
}

export default getQuiz;