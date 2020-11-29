const initialState = {author: ""};


export default (state = initialState, action) => {
    if(action.type === "UPDATE_AUTHOR") {
        return{
            ...state,
            author: action.payload
        }
    }
    return state;
};

export const selectActiveAuthor = state => state.authorReducer.author;