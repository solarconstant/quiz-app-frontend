export const setQuizzerName = (payload = {}) =>
{
    return {
        type: "SET_NAME",
        payload
    }
};

export const setQuizzerAvatar = (payload = {}) =>
{
    return {
        type: "SET_AVATAR",
        payload
    }
}