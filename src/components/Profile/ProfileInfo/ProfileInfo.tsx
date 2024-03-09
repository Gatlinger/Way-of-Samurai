import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://w.forfun.com/fetch/d1/d13e7c9a869e0d27b2292867f0e22472.jpeg' className={classes.profile_img}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo