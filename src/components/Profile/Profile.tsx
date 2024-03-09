import React from "react";
import { PostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile