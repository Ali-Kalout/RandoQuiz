import React, { useState } from 'react';
import {
    Container, Grid, TextField, Paper, FormControl, MenuItem, Select, InputLabel, Button
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "./../redux/actions/index";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state => state.state);
    const [form, setForm] = useState({
        name: "", nbQuestions: 1, category: 9, difficulty: "easy"
    });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => dispatch(fetchQuiz(form, history));

    return (
        <Container>
            <h3>Welcome to RandoQuiz!<br></br>Please fill out the following fields to take a random quiz.
                <br></br>GoodLuck!
            </h3>
            <Grid>
                <div>
                    <Paper variant="outlined" style={{ padding: "15px" }} elevation={3}>
                        <div className="margin">
                            <TextField name="name" variant="outlined" fullWidth
                                label="Full Name" onChange={e => handleChange(e)} />
                        </div>
                        <div className="margin">
                            <TextField type="range" name="nbQuestions" fullWidth value={form.nbQuestions}
                                max={20} label={`Number of Questions : ${form.nbQuestions}`}
                                onChange={e => handleChange(e)} InputProps={{
                                    inputProps: {
                                        max: 20, min: 1
                                    }
                                }}
                            />
                        </div>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <div className="margin">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            defaultValue={9}
                                            name="category"
                                            label="Category"
                                            onChange={e => handleChange(e)}
                                        >
                                            <MenuItem value={9}>General Knowledge</MenuItem>
                                            <MenuItem value={17}>Science</MenuItem>
                                            <MenuItem value={25}>Art</MenuItem>
                                            <MenuItem value={23}>History</MenuItem>
                                            <MenuItem value={27}>Animals</MenuItem>
                                            <MenuItem value={28}>Vehicles</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="margin">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Difficulty</InputLabel>
                                        <Select
                                            defaultValue="easy"
                                            name="difficulty"
                                            label="Difficulty"
                                            onChange={e => handleChange(e)}
                                        >
                                            <MenuItem value="easy">Easy</MenuItem>
                                            <MenuItem value="medium">Medium</MenuItem>
                                            <MenuItem value="hard">Hard</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="margin">
                            <Button variant="contained" disabled={state?.isLoading ? true : false} size="large"
                                color="primary" onClick={handleSubmit}>
                                {state?.isLoading ? <span style={{ color: "black" }}><b>Loading...</b></span> : "Take Quiz"}
                            </Button>
                            <span style={{ marginLeft: "10px", color: "red", fontWeight: "bold" }}>{state.error}</span>
                        </div>
                    </Paper>
                </div>
            </Grid>
        </Container>
    );
}

export default Home;