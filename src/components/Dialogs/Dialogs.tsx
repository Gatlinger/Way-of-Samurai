import React, {useRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, messagesPageType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    state: messagesPageType
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        alert(newMessageEl.current?.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <textarea ref={newMessageEl}></textarea>
                <button onClick={addMessage}>addMessage</button>
            </div>
        </div>
    )
}

export default Dialogs