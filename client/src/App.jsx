import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import Home from './components/Home';
import Quiz from "./components/Quiz";
import Navbar from "./components/partials/Navbar";

import "./styles.css";

const App = () => {
	const questions = useSelector(state => state.state.questions);

	return (
		<Container maxWidth="md">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:quizId"
					component={() => (questions?.length ? <Quiz /> : <Redirect to="/" />)} />

				<Redirect to="/" />
			</Switch>
		</Container>
	);
}

export default App;