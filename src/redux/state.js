let store = {
        _state : {
        profile: {
            postsData: [
            {id: 1, message: 'Hello world!', likesCount: '45', profileIcon: "https://i.pinimg.com/originals/e9/10/1a/e9101a6e66486645265e4241abf509ae.png"},
            {id: 2, message: 'Have a nice day!', likesCount: '30', profileIcon: 'https://i.pinimg.com/originals/cd/cb/c3/cdcbc3a30cca0fc8a2ea8500d83e1076.jpg'},
            {id: 3, message: 'I learn React!', likesCount: '25', profileIcon: 'https://i.pinimg.com/originals/bb/4c/89/bb4c894d6eff9e51254c5f90acf52fff.jpg'}
            ],
            friendList: [
                {id: 1, name: 'Maxim', profileIcon: 'https://i.pinimg.com/originals/27/ff/af/27ffafdc0db6f06aadbc41c6dc78405c.jpg'},
                {id: 2, name: 'Angelina', profileIcon: 'https://i.pinimg.com/originals/7d/84/cd/7d84cd74b3b8d45b5252e0c952d51bb6.jpg'},
                {id: 3, name: 'Sveta', profileIcon: 'https://i.pinimg.com/originals/00/e6/df/00e6df6ef27d4f076317b9c4ff0eb28c.jpg'},
                {id: 4, name: 'Misha', profileIcon: 'https://i.pinimg.com/originals/11/17/7c/11177c88030e3ef7a68c6614716dafc1.jpg'},
                {id: 5, name: 'Damyen', profileIcon: 'https://i.pinimg.com/originals/63/de/ef/63deef811485efd4052cf37fee4fe883.jpg'}
            ],
            newPostText : 'See ya space cowboy'
        },
        chat: {
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
              ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: this._state.profile.postsData.length + 1,
            message: this._state.profile.newPostText,
            likesCount: 0,
            profileIcon: this._state.profile.postsData[0].profileIcon
        }
        this._state.profile.postsData.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profile.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}


window.store = store

export default store;
