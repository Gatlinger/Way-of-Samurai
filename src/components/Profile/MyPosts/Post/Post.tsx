import React from "react";
import classes from './Post.module.css';

type PastPropsType = {
    message: string
    likeCount: number
}
const Post = (props: PastPropsType) => {
    return (
        <div className={classes.item}>
            <img src={'https://cdn.mos.cms.futurecdn.net/DfwUmx67CrepMBH6bteeS4.gif'}/>
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post