import React from 'react';
import { Button, Container, Grid, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Question from "./quiz/Question";
import Answer from "./quiz/Answer";
import Paginate from "./pagination/Paginate";
import { chooseAnswer, submitQuiz } from "./../redux/actions/index";

const useQuery = () => new URLSearchParams(useLocation().search);

const Quiz = ({ review }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page');
    const { questions, answers, isLoading, results, uuid } = useSelector(state => state.state);

    const handleChoose = answer => dispatch(chooseAnswer(page, answer));
    const handleSubmit = () => dispatch(submitQuiz(answers, uuid, history));

    return (
        <>
            {review && <p>Review</p>}
            <Container id="quizSection">
                <h3 className="questionNb">
                    Question : {parseInt(page) + 1} / {parseInt(questions.length)}
                </h3>
                <Question question={questions[page].question} />
                <hr />
                <Grid container spacing={2}>
                    {questions[page].answers.map((a, i) => (
                        review ? (
                            <Answer key={i} handleChoose={handleChoose} answer={a} review={true}
                                correct_answer={results[page]?.correct_answer === String(a) ? String(a) : null}
                                chosen_answer={results[page]?.chosen_answer === String(a) ? String(a) : null} />
                        ) : (
                            <Answer key={i} handleChoose={handleChoose} answer={a}
                                chosen={(answers[page] && answers[page] === String(a)) ? true : false} />
                        )
                    ))}
                </Grid>
            </Container>
            <Container>
                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                    {!review ? (
                        <Button onClick={handleSubmit} color="primary" size="large"
                            variant="contained" disabled={isLoading ? true : false}>
                            {isLoading ? "Loading..." : "Submit"}
                        </Button>
                    ) : (
                        <Button onClick={() => history.push(`/${uuid}/results`)} color="primary"
                            size="large" variant="contained">
                            Finish Review
                        </Button>
                    )}
                </div>
            </Container>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Paginate page={page} numberOfPages={questions.length} uuid={uuid}
                        disabled={isLoading ? true : false} review={review} />
                </Paper>
            </Container>
        </>
    );
}

export default Quiz;