import React from 'react';
import { useSelector } from "react-redux";

const Quiz = () => {
    const questions = useSelector(state => state.state.questions);

    return (
        <div>
            <span>{JSON.stringify(questions, null, 2)}</span>
        </div>
    );
}

export default Quiz;