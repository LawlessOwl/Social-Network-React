const updateMessage = 'UPDATE-NEW-MESSAGE-BODY'
const sendMessage = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    if (action.type === updateMessage) {
        state.newMessageBody = action.body
    } else if (action.type === sendMessage) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 4, message: body})
    }
    return state
}

export default dialogsReducer