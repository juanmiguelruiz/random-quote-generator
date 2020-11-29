const updateAuthor = (author) =>{
    return{
        type: 'UPDATE_AUTHOR',
        payload: author
    }
}

export default updateAuthor;