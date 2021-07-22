import React from 'react';
import { Paper } from "@material-ui/core";

const convert = string => {
    return string.replace(/&#(?:x([\da-f]+)|(\d+));/ig, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex))
    });
}

const Question = ({ question }) => {
    return (
        <div>
            <Paper elevation={3} className="block">
                <h3>{convert(question)}</h3>
            </Paper>
        </div>
    );
}

export default Question;