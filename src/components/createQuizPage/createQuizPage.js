import React, { useState } from "react";
import { useStore, useDispatch, connect } from "react-redux";
import { Input, Radio, Form, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { setRounds } from "../../actions/quizAction";
import "./createQuizPage.css";

const CreateQuizPage = () =>
{
    const [rounds, setRounds] = useState([]);
    
    const store = useStore();
    const dispatch = useDispatch();

    let quiz_name = store.getState().quiz;
    const quiz_rounds = ["Preliminary", "Main"]
    const quiz_sub_rounds = ["Pounce", "Pounce + Bounce", "Buzzer", "Differential", "Long Visual Connect"]

    const addRound = (e) =>
    {
        setRounds([...rounds, e.target.value]);
        console.log(document.getElementsByClassName("createQuizPage__type-button"));
    }

    const clearSelection = () =>
    {
        setRounds([]);
        let space = document.getElementById("createQuizPage__rounds");
        space.innerHTML = "";
    }

    const sendToAddScores = () =>
    {
        try
        {
            dispatch(setRounds(rounds));
        }
        catch(err)
        {
            console.log(err);
            console.log(rounds);
        }
    }

    return (
        <div id = "createQuizPage">
            <Form
                name="basic"
                className = "createQuizPage__form"
            >
                <h1>Name: {quiz_name}</h1>
                <hr />
                <Form.Item>
                    <label>Choose Quiz Type </label>
                    <Radio.Group
                        options = {quiz_rounds}
                        optionType = "button"
                        buttonStyle = "solid"
                        className = "createQuizPage__type-button"
                    ></Radio.Group>
                    <Button disabled = {rounds && rounds.length ? false : true} id = "createQuizPage__clear" onClick = {clearSelection}>Clear Added Rounds</Button>
                </Form.Item>
                <Form.List name="users" id = "">
                    {(fields, { add }) => (
                    <>
                        <div id = "createQuizPage__rounds">
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} align="baseline" className = "createQuizPage__quiz-round">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'round_type']}
                                    fieldKey={[fieldKey, 'round_type']}
                                    rules={[{ required: true, message: 'Missing Quiz Round' }]}
                                >
                                    <label>Choose Round Type </label>
                                    <Radio.Group
                                        options = {quiz_sub_rounds}
                                        optionType = "button"
                                        buttonStyle = "solid"
                                        onChange = {(e) => addRound(e)}
                                    ></Radio.Group>
                                </Form.Item>
                                {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
                            </Space>
                            ))}
                        </div>
                        <Form.Item>
                            <Button onClick={() => add()} icon={<PlusOutlined />}>
                                Add a Round
                            </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
            </Form> 
            <div className = "createQuizPage__added-rounds">
                <h1>Flow of Rounds:</h1>
                <Button onClick = {sendToAddScores} disabled = {rounds.length ? false : true} id = "createQuizPage__submit" type = "submit">Add Scores to Selected Rounds</Button>
                {rounds && rounds.length && rounds.map((r) => (
                    <div>
                        <p>{r}</p>
                        <i class="fas fa-arrow-alt-circle-down"></i>
                    </div>
                ))}
                {rounds.length ? (<p>The End</p>) : (<p>Add a Round</p>)}
            </div>
        </div>
    )
}

const dispatchStateToProp = (state) =>
{
  return {quiz_rounds: state.quiz_rounds};
}

export default connect(dispatchStateToProp)(CreateQuizPage);