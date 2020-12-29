import React from 'react';
import '../css/general.css';
import {likedPost} from './funcions';

const Post = ({...props}) => {
    console.log(props);
    return(
        <div className = "post" id = {props.id}>
                <div className = "post__heading">
                    <div><img src={props.photo} className = "post__heading--photo"/>
                    </div>
                    <div className = "post__heading--info">
                        <div className = "post__heading--personal-info">
                            <p className = {
                                props.verifiedAccount ? "post__heading--personal-info-check" : ""
                            }>{props.name}</p>
                            <p className = "nickname">{props.nickname}</p>
                            <p className = "date">{props.date}</p>
                        </div>
                        <div className = "post__heading--content">
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div> 
                <div className = "post__body">
                    <img src = {props.imageContent} className = "post__body--content"/>
                </div>
                <div className = "post__footer">
                    <p className = "post__footer--comments post-action">{props.comments}</p>
                    <p className = "post__footer--likes unlike post-action" onClick = {() => likedPost(props)}>{props.likes}</p>
                    <p className = "post__footer--share post-action">{props.share}</p>
                    <p className = "post__footer--cloud post-action"></p>
                </div>
        </div>
    )
}

export default Post;