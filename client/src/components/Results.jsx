import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Results = () => {
    const history = useHistory();
    const { results, uuid } = useSelector(state => state.state);
    const answersStatus = calculateResults(results);

    return (
        <Container>
            <h3>
                Results :&nbsp;
                {Math.ceil(Number(answersStatus["correct"]) /
                    (Number(answersStatus["correct"]) + Number(answersStatus["else"])) * 100)}
                &nbsp;/ 100.
            </h3>
            <p onClick={() => history.push(`/${uuid}/review/?page=${0}`)}>review</p>
            <pre>{JSON.stringify(results, null, 2)}</pre>
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