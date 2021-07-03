import React, { useState } from "react";
import { useStore } from "react-redux";
import { Input, Radio, Form, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./createQuizPage.css";

const RoundTypeScheme = ({ type }) =>
{
    const [lvcques, setLvcques] = useState(0);
    console.log(type);
    try
    {
        switch(type)
        {
            case "Pounce":
                return (
                    <div>
                        <label>Score for correct answer (Direct) </label>
                        <Input size = "small" />
                        <label>Score for incorrect answer (Direct) </label>
                        <Input size = "small" />
                        <label>Score for correct answer (Pounce) </label>
                        <Input size = "small" />
                        <label>Score for incorrect answer (Pounce) </label>
                        <Input size = "small" />
                        <hr />
                    </div>
                );
            case "Pounce + Bounce":
                return (
                    <div>
                        <label>Score for correct answer (Direct) </label>
                        <Input size = "small" />
                        <label>Score for incorrect answer (Direct) </label>
                        <Input size = "small" />
                        <label>Score for correct answer (Pounce) </label>
                        <Input size = "small" />
                        <label>Score for incorrect answer (Pounce) </label>
                        <Input size = "small" />
                        <label>Score for correct answer (Bounce) </label>
                        <Input size = "small" />
                        <label>Score for incorrect answer (Bounce) </label>
                        <Input size = "small" />
                    </div>
                )
            case "Differential":
                return (
                    <div>
                        <label>Score at stake</label>
                        <Input size = "small" />
                    </div>
                )
            case "Buzzer":
                return (
                    <div>
                        <label>Score for correct answer</label>
                        <Input size = "small" />
                        <label>Score for incorrect answer</label>
                        <Input size = "small" />
                    </div>
                )
            case "Long Visual Connect":
                return (
                    <div>
                        <label>No. of visuals</label>
                        <Input size = "small" onChange = {(e) => setLvcques(e.target.value)}/>
                        {Array.from(Array(lvcques).keys()).map(() => (
                            <div>
                                <label>Score for correct answer</label>
                                <Input size = "small" />
                                <label>Score for incorrect answer</label>
                                <Input size = "small" />
                            </div>
                        ))}
                    </div>
                )
            default:
                return (<></>)
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

const CreateQuizPage = () =>
{
    const [rounds, setRounds] = useState([]);
    const [count, setCount] = useState(0);
    
    const store = useStore();
    let quiz_name = store.getState().quiz;
    const quiz_rounds = ["Preliminary", "Main"]
    const quiz_sub_rounds = ["Pounce", "Pounce + Bounce", "Buzzer", "Differential", "Long Visual Connect"]

    const addRound = (e, name) =>
    {
        setRounds([...rounds, e.target.value]);
        console.log(e.target);
        if(e.target.checked)
            console.log(e.target.disabled);
    }

    return (
        <div id = "createQuizPage">
            <Form
                name="basic"
                className = "createQuizPage__form"
            >
                <h1>Name: {quiz_name}</h1>
                <Form.Item>
                    <label>Choose Quiz Type </label>
                    <Radio.Group
                        options = {quiz_rounds}
                        optionType = "button"
                        buttonStyle = "solid"
                        className = "createQuizPage__type-button"
                    ></Radio.Group>
                </Form.Item>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                    <>
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
                        <Form.Item>
                            <Button onClick={() => add()} icon={<PlusOutlined />}>
                                Add a Round
                            </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
            </Form> 
        </div>
    )
}

export default CreateQuizPage;