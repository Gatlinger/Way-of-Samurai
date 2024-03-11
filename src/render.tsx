import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StateType, addPost} from "./redux/state";
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerederEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
        <App state={ state } addPost = { addPost } />
        </React.StrictMode>
    );
}
