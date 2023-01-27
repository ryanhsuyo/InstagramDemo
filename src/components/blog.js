import React from "react";
import blogCss from './blog.module.css'
import avatar1 from '../assets/cat1.jpg'
import moreIcon from '../assets/icon/option.png'

function Blog (){
    return(
        <div className={blogCss.outLine}>
            <div className={blogCss.div}>
                {/* <div className={blogCss.avtarCirle}> */}
                    <div className={blogCss.avatar}>

                        <img className={blogCss.avatarImg} src={avatar1} alt="avatar1"></img>
                    </div>
                {/* </div> */}
                <section className={blogCss.introduce}>
                    <div className={blogCss.introduceTop}>
                        {/* <h1></h1> */}
                        <div className={blogCss.introduceId}>mitsukirain</div>
                        <button className={blogCss.introduceFollowBtn}>追蹤</button>
                        <button className={blogCss.introduceMsgBtn}>發送訊息</button>
                        <div className={blogCss.introduceMore}>
                            <img  className={blogCss.introduceMoreIcon} src={moreIcon} alt="moreIcon"/>
                        </div>
                    </div>
                    <div></div>
                    <ul className={blogCss.introduceUl}>
                        <li>
                            <div className={blogCss.introduceUlDiv}>
                                <span className={blogCss.introduceUlTitle}>114</span>
                                "貼文"
                            </div>
                        </li>
                        <li>
                             <div className={blogCss.introduceUlDiv}>
                                <span className={blogCss.introduceUlTitle}>2.3萬</span>
                                "位粉絲"
                            </div>
                        </li>
                        <li>
                            <div className={blogCss.introduceUlDiv}>
                                <span className={blogCss.introduceUlTitle}>493</span>
                                "追蹤中"
                            </div>
                        </li>
                    </ul>
                    <div>
                        
                        <div className={blogCss.introduceBottom}>
                            <span className={blogCss.introduceBottomTitle}>ミツキ小雨</span>
                            <span className={blogCss.introduceBottomText}>小雨來得不是時候( ͡°ᴥ ͡° ʋ)</span>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Blog