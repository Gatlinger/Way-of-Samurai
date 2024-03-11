import React from "react";
import { PostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText} 
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile