const updateMessage = 'UPDATE-NEW-MESSAGE-BODY'
const sendMessage = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Angelina'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'WTF'},
        {id: 3, message: "Oh shit i'm sorry"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === updateMessage) {
        state.newMessageBody = action.body
    } else if (action.type === sendMessage) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 4, message: body})
    }
    return state
}

export const sendMessageCreator = () => ({type: sendMessage})
export const updateNewMessageBodyCreator = (body) => ({type: updateMessage, body: body})

export default dialogsReducer