import React from 'react';
import { Paper, Grid } from "@material-ui/core";

const Answer = ({ answer }) => {
    return (
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className="block answer" elevation={3}>
                <h3>{answer}</h3>
            </Paper>
        </Grid>
    );
}

export default Answer;