import React from 'react';
import { Container, Button } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import RTable from './results/RTable';

const Results = () => {
    const history = useHistory();
    const { results, uuid, questions, fullName } = useSelector(state => state.state);
    const answersStatus = calculateResults(results);

    return (
        <Container>
            <h3>
                Results :&nbsp;
                {Math.ceil(Number(answersStatus["correct"]) /
                    (Number(answersStatus["correct"]) + Number(answersStatus["else"])) * 100)}
                &nbsp;/ 100.
            </h3>
            <h4>Hello {fullName}! You answered {Number(answersStatus["correct"])} correct question
                {Number(answersStatus["correct"]) === 1 ? "" : "s"}.
            </h4>
            <RTable data={{ results: results, questions: questions }} />
            <div style={{ textAlign: "right", marginBottom: "10px", marginTop: "10px" }}>
                <Button onClick={() => window.location.reload()} size="large" variant="contained"
                    color="secondary" style={{ marginRight: "5px" }}>
                    Play Again
                </Button>
                <Button onClick={() => history.push(`/${uuid}/review/?page=${0}`)} color="primary"
                    size="large" variant="contained">
                    Review
                </Button>
            </div>
        </Container>
    );
}

const calculateResults = results => {
    const status = { correct: 0, else: 0 };

    for (let index of Object.keys(results)) {
        if (results[index].status === "correct")
            status["correct"]++;
        else
            status["else"]++;
    }

    return status;
}

export default Results;