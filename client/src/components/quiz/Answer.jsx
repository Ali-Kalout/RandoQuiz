import React from 'react';
import { Paper, Grid } from "@material-ui/core";

const convert = string => {
    return string.replace(/&#(?:x([\da-f]+)|(\d+));/ig, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex))
    });
}

const Answer = ({ answer, handleChoose, chosen }) => {
    return (
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className="block answer" elevation={3} onClick={() => handleChoose(answer)}
                id={chosen ? "chosen" : ""}>
                <h3>{convert(answer)}</h3>
            </Paper>
        </Grid>
    );
}

export default Answer;