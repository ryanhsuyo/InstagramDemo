import React,{useEffect, useState} from "react";
import postTreeCss from './postTree.module.css'
// import avater1 from '../assets/avaterImg/cat1.jpg'
import moreIcon from '../assets/icon/option.png'
// import avater1postImg1 from '../assets/cat1.jpg'
import nextIcon from '../assets/icon/next.png' 
import heartIcon from '../assets/icon/heart.png'
import chatIcon from '../assets/icon/chat.png'
import textIcon from '../assets/icon/send.png'
import markIcon from '../assets/icon/bookmark.png'
// import smileIcon from '../assets/icon/smile.png'
import database from "../api/api";

function PostTree(){

    const [userData, setUserData] = useState(null);
    const [postData, setPostData] = useState(null);
  
    useEffect(() => {
      const usersRef = database.ref('users');
      usersRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
      }, []);
  
      const postsRef = database.ref('posts');
      postsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setPostData(data);
      }, []);
    }, []);
  
    if (!userData || !postData) {
      return <div>Loading...</div>;
    }

   
    return (
        <>
            <div>
                {postData && Object.keys(postData).map((postId) => {
                    const post = postData[postId];
                    const user = userData[post.user];
                    return(
                    <div className={postTreeCss.outLine}>
                        <div className={postTreeCss.container} post={postId}>
                            <ul className={postTreeCss.ul}>
                                <li>
                                    <div className={postTreeCss.topBar} key={postId}>
                                        <div className={postTreeCss.nameBar}>
                                            <div className={postTreeCss.outCircle}>
                                                <div className={postTreeCss.circle}>
                                                    <img src={user.profile_picture} alt="avater1" className={postTreeCss.avaterImgSmall}></img>
                                                </div>
                                            </div>
                                            <div className={postTreeCss.name}>{userData.user1.username}</div>
                                        </div>
                                        <div className={postTreeCss.moreIconDiv}>
                                            <img src={moreIcon} alt="moreIcon" className={postTreeCss.moreIcon}></img>
                                        </div>
                                    </div>
                                    <div className={postTreeCss.postImgDiv} key={postData}>
                                        <img src={post.image_url} alt={post.caption} className={postTreeCss.avaterImg}></img>
                                        <img src={moreIcon} alt="moreIcon" className={postTreeCss.postMoreIcon}></img>
                                        <img src={nextIcon} alt='nextIcon' className={postTreeCss.nextIcon}></img>
                                    </div>
                                    <div className={postTreeCss.sectionBar}>
                                        <div className={postTreeCss.threeIcon}>
                                            <ul className={postTreeCss.sectionUl}>
                                                <li>
                                                    <img src={heartIcon} alt="heartIcon" className={postTreeCss.sectionBarIcon}></img>
                                                </li>
                                                <li>
                                                    <img src={chatIcon} alt="chatIcon" className={postTreeCss.sectionBarIcon}></img>
                                                </li>
                                                <li>
                                                    <img src={textIcon} alt="textIcon" className={postTreeCss.sectionBarIcon}></img>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={postTreeCss.markIconDiv}>
                                            <img  src={markIcon} alt='markIcon' className={postTreeCss.markIcon}></img>
                                        </div>
                                    </div>
                                    <div className={postTreeCss.getAwesomeBar}>
                                        <span className={postTreeCss.getAwesome}>2431</span>
                                        <span>個讚</span>
                                    </div>
                                    <div className={postTreeCss.textBar}>
                                        <div className={postTreeCss.textBarMoreText}>查看全部<span>14</span>則留言</div>
                                        {/* <div className={postTreeCss.textReply}>
                                            <div className={postTreeCss.textAccount}>{userData.user1.username}<div className={postTreeCss.textContent}>{post.caption}</div></div>
                                            <img src={heartIcon} alt='heartIcon' className={postTreeCss.textHeartIcon}></img>
                                        </div> */}
                                        <div className={postTreeCss.textReply} key={post.comments}>
                                            {post.comments && Object.keys(post.comments).map((commentId)=>{
                                                   const comment = post.comments[commentId];
                                                   const commentUser = userData[comment.user];
                                                   return (
                                                    <div className={postTreeCss.commentAndLove}>

                                                       <div className={postTreeCss.comment} key={commentId}>
                                                           <div className={postTreeCss.commentUsername}>{commentUser.username}</div>
                                                           <div className={postTreeCss.commentText}>{comment.text}</div>
                                                       </div>
                                                        <img src={heartIcon} alt='heartIcon' className={postTreeCss.textHeartIcon}></img>
                                                    </div>
                                                   );
                                               })}
               
                                            <div className={postTreeCss.textAccount}>{post.comments.text}<div className={postTreeCss.textContent}> {}</div></div>
                                        </div>
                                    </div>
                                    {/* <div className={postTreeCss.textFCBar}>
                                        <span className={postTreeCss.textFCTime}>1天前</span>
                                        <span className={postTreeCss.textFCTranslate}>翻譯年糕</span>
                                    </div>
                                    <div className={postTreeCss.textReplyBar}>
                                        <div className={postTreeCss.textReplyMsgBar}>
                                            <div className={postTreeCss.textReplyMsgEmot}>
                                                <img src={smileIcon} alt='smileIcon' className={postTreeCss.smileIcon}></img>
                                            </div>
                                            <input placeholder="留言......" className={postTreeCss.textReplyMsg}></input>
                                        </div>
                                        <div className={postTreeCss.textSendDiv}>
                                            <div className={postTreeCss.textSendBtn}>發布</div>
                                        </div>
                                    </div> */}
                                </li>
                            </ul>
                        </div>
                </div>
                    )
                })}
            </div>
        </>
    )
}

export default PostTree