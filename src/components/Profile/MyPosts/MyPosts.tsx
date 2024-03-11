import React, { useRef } from "react";
import { PostsType } from "../../../redux/state";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value
            props.updateNewPostText(text)
            newPostEl.current.value = ""
        }
    }

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

    return (
        <div className={classes.content}>
            <div className={classes.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostEl} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts