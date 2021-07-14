import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingPage from "./components/LandingPage/LandingPage"
import CreateQuizPage from "./components/CreateQuizPage/createQuizPage";
import QuizPage from "./components/QuizPage/quizPage";

import 'antd/dist/antd.css';

const App = () =>
{
  return (
    <Switch>
      <Route exact path = "/" component = {() => <LandingPage />} />
      <Route exact path = "/create/:quiz_name" component = {() => <CreateQuizPage />} />
      <Route exact path = "/quiz/:id" component = {() => <QuizPage />} />
    </Switch>
  )
}

const mapStateToProps = (state) =>
{
  return {quiz: state.quiz};
}

export default connect(mapStateToProps)(App);
