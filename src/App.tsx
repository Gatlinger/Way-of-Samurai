import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StateType } from "./redux/state";
import Dialogs from './components/Dialogs/Dialogs';

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addNewMessage: () => void
    updateNewMessageText: (newText: string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                            newPostText={props.state.profilePage.newPostText} />} />
                        <Route path="/dialogs/*" element={<Dialogs
                            state={props.state.dialogsPage}
                            addNewMessage={props.addNewMessage}
                            updateNewMessageText={props.updateNewMessageText}
                            newMessageText={ props.state.dialogsPage.newMessage } />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
