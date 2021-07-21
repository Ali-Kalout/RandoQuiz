import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import Home from './components/Home';
import Quiz from "./components/Quiz";
import Navbar from "./components/partials/Navbar";

import "./styles.css";

const App = () => {
	return (
		<Container maxWidth="md">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:quizId" component={Quiz} />

				<Redirect to="/" />
			</Switch>
		</Container>
	);
}

export default App;
