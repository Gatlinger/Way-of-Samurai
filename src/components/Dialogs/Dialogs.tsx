import React, {useRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, messagesPageType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    state: messagesPageType
    addNewMessage: () => void
    updateNewMessageText: (newText: string) => void
    newMessageText: string
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if (newMessageEl.current !== null) {
            props.addNewMessage()
        }
    }
    const onMessageChange = () => {
        if (newMessageEl.current !== null) {
            let text = newMessageEl.current.value
            props.updateNewMessageText(text)
            newMessageEl.current.value = ""
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <textarea ref={newMessageEl} onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button  onClick={addMessage} >addMessage</button>
            </div>
        </div>
    )
}

export default Dialogs