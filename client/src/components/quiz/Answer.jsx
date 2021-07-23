import React from 'react';
import { Paper, Grid } from "@material-ui/core";

const convert = string => {
    return string.replace(/&#(?:x([\da-f]+)|(\d+));/ig, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex))
    });
}

const Answer = ({ answer, handleChoose, chosen, review, correct_answer, chosen_answer }) => {
    return (
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className={`block answer ${!review && 'hover'}`}
                elevation={3}
                onClick={() => { if (!review) handleChoose(answer) }}
                id={chosen ? "chosen"
                    : (chosen_answer && correct_answer && chosen_answer === correct_answer) ? "chosen_correct_answer"
                        : correct_answer ? "correct_answer"
                            : chosen_answer ? "chosen_answer"
                                : ""}
            >
                <h3>{convert(answer)}</h3>
            </Paper>
        </Grid>
    );
}

export default Answer;