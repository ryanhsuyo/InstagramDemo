import React from "react";
import footerCss from './footer.module.css'
import homeIcon from '../assets/icon/home.png'
import exploreIcon from '../assets/icon/direction.png'
import videoIcon from '../assets/icon/video.png'
import messageIcon from '../assets/icon/message.png'
import createIcon from '../assets/icon/tab.png'
import avaterImg from '../assets/avaterImg/cat1.jpg' 

function Footer(){
    return (
        <div className={footerCss.out}>

            <div className={footerCss.outLine}>
                <div className={footerCss.list}>
                    <ul className={footerCss.ul}>
                        <li>Meta</li>
                        <li>關於</li>
                        <li>部落格</li>
                        <li>工作機會</li>
                        <li>使用說明</li>
                        <li>API</li>
                        <li>隱私</li>
                        <li>使用條款</li>
                        <li>熱門帳號</li>
                        <li>主題標籤</li>
                        <li>地點</li>
                        <li>Instagram Lite</li>
                        <li>聯絡人上傳和非用戶</li>
                    </ul>
                    <div className={footerCss.copyRigth}>
                        中文(台灣)
                        <img  alt="中文(台灣)"></img>
                        © 2022Instagram from Meta
                    </div>
                </div>
            </div>
            <div className={footerCss.bottom}>
                <div className={footerCss.bottomBar}>

                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.iconImg} src={homeIcon} alt="homeIcon"></img>
                        </div>
                    </li>
                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.iconImg} src={exploreIcon} alt="exploreIcon"></img>
                        </div>
                    </li>
                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.iconImg} src={videoIcon} alt="videoIcon"></img>
                        </div>
                    </li>
                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.iconImg} src={messageIcon} alt="messageIcon"></img>
                        </div>
                    </li>
                 
                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.iconImg} src={createIcon} alt="createIcon"></img>
                        </div>
                    </li>
                    <li className={footerCss.li}>
                        <div className={footerCss.iconDiv}>
                            <img className={footerCss.avaterImg} src={avaterImg} alt="avaterImg"></img>
                        </div>
                    </li>
                </div>
            
            </div>
        </div>
    )
}

export default Footer