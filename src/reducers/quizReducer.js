export default function quizReducer(state = null, action)
{
    switch(action.type)
    {
        case "SET_QUIZ_NAME":
            return action.payload;
        case "SET_ROUNDS":
            return {...state, set_rounds: action.payload};
        default:
            return state;
    }
}