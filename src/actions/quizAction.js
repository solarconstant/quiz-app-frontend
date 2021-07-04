export const setQuizName = (payload = {}) =>
{
    return {
        type: "SET_QUIZ_NAME",
        payload
    }
};

export const setRounds = (payload = {}) =>
{
    return {
        type: "SET_ROUNDS",
        payload
    }
}