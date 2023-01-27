import React from "react";
import chat from './chat.module.css'
import avaterImg1 from '../assets/avaterImg/cat2.jpg'
import sendCircleIcon from '../assets/icon/sendCircle.png'
import downIcon from '../assets/icon/down-arrow.png'
import sentIcon from '../assets/icon/edit.png'

function Chat(){
    // const chatBox = document.getElementById('chatBox')
    // if(chatBox){
        
    // }
    return (
        <>
        <div className={chat.outLine}>
            <div className={chat.div}>
                <div className={chat.leftSide}>
                    <div className={chat.accoutBar}>
                        <div></div>
                        <div className={chat.accoutBarMiddle}>
                            <div>ryan</div>
                            <div className={chat.downIconDiv}>
                                <img className={chat.downIcon} src={downIcon} alt="changeAccout"></img>
                            </div>
                        </div>
                        <div>
                            <img src={sentIcon} className={chat.sentIcon} alt="sentToOther"></img>
                        </div>
                    </div>
                    <div className={chat.friendBar}>
                        <div className={chat.avaterBar}>
                            <div className={chat.avaterImgOut}>
                                <img src={avaterImg1}  className={chat.avaterImg} alt=""></img>
                                <div id="avaterOnline" className={chat.avaterOnline}></div>
                            </div>
                            <div className={chat.avater}>
                                <div className={chat.avaterName}>Weter</div>
                                <div className={chat.avaterContent}>
                                    <div>在幹嘛</div>
                                    <div>・2天</div>
                                </div>
                            </div>
                        </div>
                        <div className={chat.avaterBar}>
                            <div className={chat.avaterImgOut}>
                                <img src={avaterImg1}  className={chat.avaterImg} alt=""></img>
                            </div>
                            <div className={chat.avater}>
                                <div className={chat.avaterName}>Weter</div>
                                <div className={chat.avaterContent}>
                                    <div>在幹嘛</div>
                                    <div>・2天</div>
                                </div>
                            </div>
                        </div>
                        <div className={chat.avaterBar}>
                            <div className={chat.avaterImgOut}>
                                <img src={avaterImg1}  className={chat.avaterImg} alt=""></img>
                            </div>
                            <div className={chat.avater}>
                                <div className={chat.avaterName}>Weter</div>
                                <div className={chat.avaterContent}>
                                    <div>在幹嘛</div>
                                    <div>・2天</div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className={chat.rightSide}>
                    {/* <div className={chat.chatBox} id="chatBox"></div> */}
                    <div className={chat.blankOutLine}>
                        <div className={chat.blankDiv}>
                            <img className={chat.sendIcon} src={sendCircleIcon} alt=""></img>
                            <div className={chat.blankTitle}>你的訊息</div>
                            <div className={chat.blankContent}>私下傳送相片、影片和訊息給朋友或群組。</div>
                            <button className={chat.blankStartBtn}>發送訊息</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export  default Chat