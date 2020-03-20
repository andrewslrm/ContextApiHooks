const reducer = (state, { type, payload }) => {
    switch(type) {
        case "POSTS":
            return { ...state, posts: payload }
        case "LOADING":
            return { ...state, isLoading: payload }
        default:
            return state;
    }
}

export default reducer;