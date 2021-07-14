import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers(
    {
        quiz: quizReducer,
        user: userReducer
    }
)

export default rootReducer;