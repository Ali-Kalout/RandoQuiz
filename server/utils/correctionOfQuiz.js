const correctionOfQuiz = (answers, quiz) => {
    const out = {};

    for (let i = 0; i < quiz.length; i++) {
        let status, chosen_ans = "";

        if (answers[String(i)]) {
            if (answers[String(i)] === quiz[i].correct_answer)
                status = "correct";
            else
                status = "wrong"
            chosen_ans = answers[String(i)];
        } else {
            status = "not answered";
        }

        out[i] = {
            status: status,
            chosen_answer: chosen_ans,
            correct_answer: quiz[i].correct_answer
        };
    }

    return out;
}

export default correctionOfQuiz;