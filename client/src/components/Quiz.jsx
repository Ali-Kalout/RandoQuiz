import React from 'react';
import { Container, Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Question from "./quiz/Question";
import Answer from "./quiz/Answer";
import Paginate from "./pagination/Paginate";

const useQuery = () => new URLSearchParams(useLocation().search);

const Quiz = () => {
    const query = useQuery();
    const page = query.get('page');
    const uuid = useSelector(state => state.state.uuid);
    const questions = useSelector(state => state.state.questions);

    console.log(questions, uuid);

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
                        <Answer key={i} answer={a} />
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Paginate page={page} numberOfPages={questions.length} uuid={uuid} />
                </Paper>
            </Container>
        </>
    );
}

export default Quiz;