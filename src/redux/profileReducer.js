const addPost = 'ADD-POST'
const updateText = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
   if (action.type === addPost){
       let newPost = {
           id: state.postsData.length + 1,
           message: state.newPostText,
           likesCount: 0,
           profileIcon:state.postsData[0].profileIcon
       }
      state.postsData.push(newPost);
       state.newPostText = '';
   } else if (action.type === updateText) {
      state.newPostText = action.newText
   }
   return state;
}

export default profileReducer