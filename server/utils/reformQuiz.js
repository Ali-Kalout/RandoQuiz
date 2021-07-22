const reformQuiz = quiz => {
    const out = [];

    for (let i = 0; i < quiz.length; i++) {
        const new_answers = quiz[i].incorrect_answers;
        new_answers.push(quiz[i].correct_answer);

        out.push({
            question: quiz[i].question,
            answers: new_answers
        });

        shuffle(out[i].answers);
    }

    return out;
}

const shuffle = array => {
    var currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default reformQuiz;