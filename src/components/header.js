import React  from "react";
// import { ReactDOM } from "react";
import headerCss from "./header.module.css"
import Logo from "../assets/instagramLogo.png"
import Logo2 from '../assets/instagram.png'
import searchIcon from '../assets/icon/loupe.png'
import homeIcon from '../assets/icon/home.png'
import exploreIcon from '../assets/icon/direction.png'
import videoIcon from '../assets/icon/video.png'
import messageIcon from '../assets/icon/message.png'
import noticeIcon from  '../assets/icon/heart.png'
import createIcon from '../assets/icon/tab.png'
import avaterImg from '../assets/avaterImg/cat1.jpg' 
import menuIcon from '../assets/icon/menu.png'
import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from 'react-modal';
import CreateArticle from "./createArticle";
   
function Header(){
    const go = useNavigate();
    // const [isModalOpen, setIsModalOpen] = useState(false);


    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }
    };
    // function openModal () {
    //     setIsModalOpen(true)
    // }
    // function closeModal ()  {
    //     setIsModalOpen(false);
    // }
    
    return(
        <div>
            <div className={headerCss.outLine}>
                <div className={headerCss.div} >
                    <div>
                        
                        {/* <CreateArticle></CreateArticle> */}
                        <div className={headerCss.iconDiv} onClick={() => {go('/')}}>
                            <img className={headerCss.logo} src={Logo} alt="Logo" />
                            <img className={headerCss.logo2} src={Logo2} alt="Logo2"/>
                        </div>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv} onClick={() => {go('/')}}>
                                <img className={headerCss.iconImg} src={homeIcon} alt="homeIcon"></img>
                                <div className={headerCss.iconTitle} onClick={() => {go('/')}}>首頁</div>
                            </div>
                        </li>
                        <li  className={headerCss.li}>
                            <div className={headerCss.searchBar}>
                                <div className={headerCss.searchIconDiv}>
                                    <img alt="searchIcon" src={searchIcon} className={headerCss.searchIcon}></img>
                                </div>
                                <div placeholder="搜尋" className={headerCss.searchText}>搜尋</div>
                            </div>
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv} onClick={()=>{go('/explore')}}>
                                <img className={headerCss.iconImg} src={exploreIcon} alt="exploreIcon"></img>
                                <div className={headerCss.iconTitle}>探索</div>
                            </div>
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv} onClick={() => {go('/video')}}>
                                <img className={headerCss.iconImg} src={videoIcon} alt="videoIcon"></img>
                                <div className={headerCss.iconTitle}>連續短片</div>
                            </div>
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv} onClick={()=>{go('/message')}}>
                                <img className={headerCss.iconImg} src={messageIcon} alt="messageIcon"></img>
                                <div className={headerCss.iconTitle}>訊息</div>
                            </div>
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv}>
                                <img className={headerCss.iconImg} src={noticeIcon} alt="noticeIcon"></img>
                                <div className={headerCss.iconTitle}>通知</div>
                            </div>
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv} id="createMaskBtn"
                                // onClick={openModal}
                         >
                             {/* <Modal 
                                isOpen={isModalOpen} 
                                // onRequestClose={closeModal}
                                style={customStyles}
                            >
                                <CreateArticle onClose={closeModal}></CreateArticle>
                            </Modal> */}
                                <img className={headerCss.iconImg} src={createIcon} alt="createIcon"></img>
                                <div className={headerCss.iconTitle}>建立</div>
                            </div>
                            {/* <CreateArticle  trigger={createBtn} setCreateBtn={setCreateBtn}></CreateArticle> */}
                        </li>
                        <li className={headerCss.li}>
                            <div className={headerCss.iconDiv}>
                                <img className={headerCss.avaterImg} src={avaterImg} alt="avaterImg"></img>
                                <div className={headerCss.iconTitle}>個人檔案</div>
                            </div>
                        </li>
                    </div>
                    <li>
                        <button className={headerCss.btnLogin}>追蹤</button>
                        <button className={headerCss.btnRegister}>個人檔案</button>
                    </li>
                    <div className={headerCss.menuDiv}>
                        <img className={headerCss.menuIcon} src={menuIcon} alt="menuIcon"></img>
                        <div className={headerCss.menuText}>更多</div>
                    </div>
                </div>
            </div>
                {/* under767 */}
            <div className={headerCss.outLine2}>
                <div className={headerCss.topBar}>
                    <div className={headerCss.leftBar}>

                        <div className={headerCss.iconDiv}>
                            <img className={headerCss.logo} src={Logo} alt="Logo"/>
                        </div>
                    </div>
                    <div className={headerCss.rightBar}>

                        <div className={headerCss.searchBar}>
                                <div className={headerCss.searchIconDiv}>
                                    <img alt="searchIcon" src={searchIcon} className={headerCss.searchIcon}></img>
                                </div>
                                <div placeholder="搜尋" className={headerCss.searchText}>搜尋</div>
                        </div>
                        <div className={headerCss.iconDiv}>
                            <img className={headerCss.iconImg} src={noticeIcon} alt="noticeIcon"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header