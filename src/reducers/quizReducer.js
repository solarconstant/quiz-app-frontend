export default function quizReducer(state = null, action)
{
    switch(action.type)
    {
        case "SET_QUIZ_NAME":
            return action.payload;
        default:
            return state;
    }
}