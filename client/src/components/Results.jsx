import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from "react-redux";

const Results = () => {
    const { results } = useSelector(state => state.state);

    return (
        <Container>
            <h3>Results</h3>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </Container>
    );
}

export default Results;