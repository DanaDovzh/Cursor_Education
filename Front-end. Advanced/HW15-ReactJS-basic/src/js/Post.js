import React from 'react';
import '../css/general.css';
import {likedPost} from './funcions';

const Post = (props) => {
    const personPost = props.props;
    return(
        <div className = "post" id = {personPost.id}>
                <div className = "post__heading">
                    <div><img src={personPost.photo} className = "post__heading--photo"/>
                    </div>
                    <div className = "post__heading--info">
                        <div className = "post__heading--personal-info">
                            <p className = {
                                personPost.verifiedAccount ? "post__heading--personal-info-check" : ""
                            }>{personPost.name}</p>
                            <p className = "nickname">{personPost.nickname}</p>
                            <p className = "date">{personPost.date}</p>
                        </div>
                        <div className = "post__heading--content">
                            <p>{personPost.content}</p>
                        </div>
                    </div>
                </div> 
                <div className = "post__body">
                    <img src = {personPost.imageContent} className = "post__body--content"/>
                </div>
                <div className = "post__footer">
                    <p className = "post__footer--comments post-action">{personPost.comments}</p>
                    <p className = "post__footer--likes unlike post-action" onClick = {() => likedPost(personPost)}>{personPost.likes}</p>
                    <p className = "post__footer--share post-action">{personPost.share}</p>
                    <p className = "post__footer--cloud post-action"></p>
                </div>
        </div>
    )
}

export default Post;