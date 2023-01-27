import React, {useState} from "react";
// import video1 from '../assets/short/video2.mp4.mp4'
import video2 from '../assets/short/video.mp4'
import videoComCss from  './videoCom.module.css'
import heartIcon from '../assets/icon/heart.png'
import messageIcon from '../assets/icon/message.png'
import chatIcon from '../assets/icon/chat.png'
import markIcon from '../assets/icon/bookmark.png'
import moreIcon from '../assets/icon/option.png'
import avaterIcon from '../assets/avaterImg/cat2.jpg'
import volumeIcon from  '../assets/icon/volume.png'
import muteIcon from '../assets/icon/mute.png'
import playIcon from '../assets/icon/play.png'
import musicIcon from '../assets/icon/music.png'
import audio1 from '../assets/music/music1.mp3'
// import audio2 from '../assets/music/music2.mp3'




function VideoCom(){
    function muteInit(){
        return false;
    }
    function imgInit(){
        return true;
    }
    const [volume ,setVolume] = useState(()=>muteInit())
    const [imgState, setImgState] = useState(()=>imgInit())
    function play(){
        //video
        const audio = document.getElementById('audio1')
        const video = document.querySelector('video')
        const startPlay = document.getElementById('play')
        // console.log('音訊長度',audio.duration);
        // const method = video.paused ? 'play' : 'pause';
        // video[method]();
        // const mute = document.getElementById('muteIcon')
        // const audio = document.querySelector('audio')
        //VideoImg
        if(startPlay.style.display !== 'none'){
            //play video
            console.log('videoPlay', volume);
            startPlay.style.display = 'none'
            if(volume){
                video.play()
                audio.play()
                console.log('V+A');
            }else{
                video.play()
                console.log('V');
            }
        }else{
            //stop    
            startPlay.style.display = 'flex'
            video.pause()
            audio.pause()
            console.log('all stop');
        }
        
        
        //audio
        // const audioMethod = audio.paused ? 'play' : 'pause'
        // audio[audioMethod]();
        // console.log(audioMethod);
    }
    
    function Mute(){
        const ok = document.getElementById('play').style.display
        setVolume(!volume)
        console.log(volume);
        const muteImg = muteIcon
        const volumeImg = volumeIcon
        const audio = document.getElementById('audio1')
        const mute = document.getElementById('muteIcon')
        setImgState(!imgState)
        if(imgState){
            mute.src = volumeImg
            console.log('true的', imgState);
            // if(startPlay){
                // audio.play()
                if(ok === 'none'){
                    audio.play()
                    console.log('進不進來', ok);
                    
                }
        }else{
            mute.src = muteImg
            console.log('false的', imgState);
            audio.pause()
        }
        // const audio = document.getElementById('audio1')
        //judge now state
        //music 
        // const audio = document.querySelector('audio')
        // const audioMethod = audio.paused ? 'play' : 'pause'
        // audio[audioMethod]();
        // console.log(audioMethod);
        
    }
    return (
        <>
            <div className={videoComCss.outLine}>
                <div className={videoComCss.videoDiv}>
                    <div className={videoComCss.videoRL}>
                        <div className={videoComCss.leftSide}>
                            <div className={videoComCss.videoContainer}>
                                <video  className={videoComCss.videoControl}  onClick={play} loop={true}>
                                    <source src={video2} class={videoComCss.video} type="video/mp4" allowFullScreen="true"/>
                                    <audio src={audio1} id="audio1"></audio>
                                </video>
                                <div className={videoComCss.mute} id="mute" onClick={Mute}>
                                    <img id="muteIcon" src={muteIcon} alt="muteIcon" className={videoComCss.muteIcon}></img>
                                </div>
                                <div className={videoComCss.play} id="play" onClick={play}>
                                    <img src={playIcon} alt="playIcon" className={videoComCss.playIcon}></img>
                                </div>
                                <div className={videoComCss.leftBottom}>
                                    <div className={videoComCss.accountBar}>
                                        <div className={videoComCss.accountIcon}>
                                            <img src={avaterIcon} alt="avaterIcon"  className={videoComCss.acoountImg}></img>
                                        </div>
                                        <div className={videoComCss.accountName}>Berry</div>
                                        <div className={videoComCss.accountSpace}>・</div>
                                        <div className={videoComCss.following}>追蹤</div>
                                    </div>
                                    <div className={videoComCss.videoBar}>
                                        <div className={videoComCss.videoTitle}>那一聲特別響亮🤣</div>
                                        <div className={videoComCss.videoTitleMore}>...更多</div>
                                    </div>
                                    <div className={videoComCss.musicBar}>
                                        <img src={musicIcon} alt="musicIcon" className={videoComCss.musicIcon}></img>
                                        <div className={videoComCss.musicName}>Berry</div>
                                        <div className={videoComCss.musicMark}>・原始音訊</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={videoComCss.rightSide}>
                            <div></div>
                            <ul className={videoComCss.ul}>
                                <li className={videoComCss.li}>
                                    <img src={heartIcon} alt='heartIcon' className={videoComCss.icon}></img>
                                    <span>7.9萬</span>
                                </li>
                                <li className={videoComCss.li}>
                                    <img src={messageIcon} alt="messageIcon"  className={videoComCss.icon}></img>
                                    <span>735</span>
                                </li>
                                <li>
                                    <img src={chatIcon} alt="chatIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={markIcon} alt="markIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={moreIcon} alt="moreIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={avaterIcon} alt="avaterIcon"  className={videoComCss.avaterImg}></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={videoComCss.videoDiv}>
                    <div className={videoComCss.videoRL}>
                        <div className={videoComCss.leftSide}>
                            <div className={videoComCss.videoContainer}>
                                <video  className={videoComCss.videoControl}  onClick={play} loop={true}>
                                    <source src={video2} class={videoComCss.video} type="video/mp4" allowFullScreen="true"/>
                                    <audio src={audio1} id="audio1"></audio>
                                </video>
                                <div className={videoComCss.mute} id="mute" onClick={Mute}>
                                    <img id="muteIcon" src={muteIcon} alt="muteIcon" className={videoComCss.muteIcon}></img>
                                </div>
                                <div className={videoComCss.play} id="play" onClick={play}>
                                    <img src={playIcon} alt="playIcon" className={videoComCss.playIcon}></img>
                                </div>
                                <div className={videoComCss.leftBottom}>
                                    <div className={videoComCss.accountBar}>
                                        <div className={videoComCss.accountIcon}>
                                            <img src={avaterIcon} alt="avaterIcon"  className={videoComCss.acoountImg}></img>
                                        </div>
                                        <div className={videoComCss.accountName}>Berry</div>
                                        <div className={videoComCss.accountSpace}>・</div>
                                        <div className={videoComCss.following}>追蹤</div>
                                    </div>
                                    <div className={videoComCss.videoBar}>
                                        <div className={videoComCss.videoTitle}>那一聲特別響亮🤣</div>
                                        <div className={videoComCss.videoTitleMore}>...更多</div>
                                    </div>
                                    <div className={videoComCss.musicBar}>
                                        <img src={musicIcon} alt="musicIcon" className={videoComCss.musicIcon}></img>
                                        <div className={videoComCss.musicName}>Berry</div>
                                        <div className={videoComCss.musicMark}>・原始音訊</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={videoComCss.rightSide}>
                            <div></div>
                            <ul className={videoComCss.ul}>
                                <li className={videoComCss.li}>
                                    <img src={heartIcon} alt='heartIcon' className={videoComCss.icon}></img>
                                    <span>7.9萬</span>
                                </li>
                                <li className={videoComCss.li}>
                                    <img src={messageIcon} alt="messageIcon"  className={videoComCss.icon}></img>
                                    <span>735</span>
                                </li>
                                <li>
                                    <img src={chatIcon} alt="chatIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={markIcon} alt="markIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={moreIcon} alt="moreIcon"  className={videoComCss.icon}></img>
                                </li>
                                <li>
                                    <img src={avaterIcon} alt="avaterIcon"  className={videoComCss.avaterImg}></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCom