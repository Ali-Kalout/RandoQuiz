import React from 'react';
import { Button, Container, Grid, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Question from "./quiz/Question";
import Answer from "./quiz/Answer";
import Paginate from "./pagination/Paginate";
import { chooseAnswer, submitQuiz } from "./../redux/actions/index";

const useQuery = () => new URLSearchParams(useLocation().search);

const Quiz = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page');
    const uuid = useSelector(state => state.state.uuid);
    const { questions, answers, isLoading } = useSelector(state => state.state);

    const handleChoose = answer => dispatch(chooseAnswer(page, answer));

    const handleSubmit = () => dispatch(submitQuiz(answers, uuid, history));

    return (
        <>
            <Container id="quizSection">
                <h3 className="questionNb">
                    Question : {parseInt(page) + 1} / {parseInt(questions.length)}
                </h3>
                <Question question={questions[page].question} />
                <hr />
                <Grid container spacing={2}>
                    {questions[page].answers.map((a, i) => (
                        <Answer key={i} handleChoose={handleChoose} answer={a}
                            chosen={(answers[page] && answers[page] === String(a)) ? true : false} />
                    ))}
                </Grid>
            </Container>
            <Container>
                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                    <Button onClick={handleSubmit} color="primary" size="large"
                        variant="contained" disabled={isLoading ? true : false}>
                        {isLoading ? "Loading..." : "Submit"}
                    </Button>
                </div>
            </Container>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Paginate page={page} numberOfPages={questions.length} uuid={uuid}
                        disabled={isLoading ? true : false} />
                </Paper>
            </Container>
        </>
    );
}

export default Quiz;