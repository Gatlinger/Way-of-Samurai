let rerederEntireTree = (state: StateType) => {
    console.log(state)
}

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
export type profilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type messagesPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessage: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}

export let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
            { id: 3, message: 'It\'s my first post', likesCount: 11 },
            { id: 4, message: 'It\'s my first post', likesCount: 11 }
        ],
        newPostText: 'it-kamasutra.cococom'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your It-kamasutra' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
        newMessage: "Enter a massage here"
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerederEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerederEntireTree(state)
}

export const addNewMessage = () => {
    let message = {
        id: 7,
        message: state.dialogsPage.newMessage,
    }
    state.dialogsPage.messages.push(message)
    rerederEntireTree(state)
    state.dialogsPage.newMessage = ''
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessage = newText
    rerederEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerederEntireTree = observer
}