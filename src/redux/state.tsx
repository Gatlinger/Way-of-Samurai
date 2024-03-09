export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type profilePageType ={
    posts: PostsType[]
}
export type messagesPageType= {
    dialogs: DialogsType[]
    messages: MessageType[]
}


export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}

export let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi, how are you?', likesCount:12},
            {id:2, message:'It\'s my first post', likesCount:11},
            {id:3, message:'It\'s my first post', likesCount:11},
            {id:4, message:'It\'s my first post', likesCount:11}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your It-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    console.log(state.profilePage.posts)
}