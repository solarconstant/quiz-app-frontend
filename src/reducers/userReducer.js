export default function userReducer(state = {}, action)
{
    switch(action.type)
    {
        case "SET_NAME":
            return {...state, name: action.payload};
        case "SET_AVATAR":
            return {...state, avatar: action.payload};
        default:
            return state
    }
}