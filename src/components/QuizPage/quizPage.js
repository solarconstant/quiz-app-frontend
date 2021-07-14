import React from "react";
import { useParams } from "react-router-dom";
import { connect, useStore } from "react-redux";

import ChatArea from "../ChatArea/chatArea";

import { Row, Col } from "antd";
import "./quizPage.css";

const QuizPage = () =>
{
    const store = useStore();
    let state = store.getState();

    const params = useParams();

    const { name, avatar } = state.user;

    return (
        <div className = "quizPage">
            <Row>
                <Col span = {17}>
                    ScoreCard and LeaderBoard here
                </Col>
                <Col span = {6}>
                    <ChatArea user_name = {name} avatar = {avatar} quiz_id = {params.id} />
                </Col>
            </Row>
        </div>
    )
}

export default connect()(QuizPage);