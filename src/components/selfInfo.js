import React from "react";
import selfInfoCss from './selfInfo.module.css'
import accountImg from '../assets/avaterImg/cat1.jpg'

function SelfInfo(){
    return (
        <div className={selfInfoCss.outLine}>
            <div className={selfInfoCss.accountBar}>
                <div className={selfInfoCss.accountInfoBar}>
                    <div className={selfInfoCss.circle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.accountImg}></img>
                    </div>
                    <div className={selfInfoCss.accountIdBar}>
                        <span className={selfInfoCss.accountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.accountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.accountSwitch}>切換</div>
            </div>
            <div className={selfInfoCss.FCBar}>
                <span className={selfInfoCss.recommend}>推薦用戶</span>
                <span className={selfInfoCss.checkAll}>查看全部</span>
            </div>
            <div className={selfInfoCss.reAccountBar}>
                <div className={selfInfoCss.reAccountInfoBar}>
                    <div className={selfInfoCss.reCircle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.reAccountImg}></img>
                    </div>
                    <div className={selfInfoCss.reAccountIdBar}>
                        <span className={selfInfoCss.reAccountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.reAccountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.reAccountFollow}>追蹤</div>
            </div>
            <div className={selfInfoCss.reAccountBar}>
                <div className={selfInfoCss.reAccountInfoBar}>
                    <div className={selfInfoCss.reCircle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.reAccountImg}></img>
                    </div>
                    <div className={selfInfoCss.reAccountIdBar}>
                        <span className={selfInfoCss.reAccountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.reAccountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.reAccountFollow}>追蹤</div>
            </div>
            <div className={selfInfoCss.reAccountBar}>
                <div className={selfInfoCss.reAccountInfoBar}>
                    <div className={selfInfoCss.reCircle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.reAccountImg}></img>
                    </div>
                    <div className={selfInfoCss.reAccountIdBar}>
                        <span className={selfInfoCss.reAccountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.reAccountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.reAccountFollow}>追蹤</div>
            </div>
            <div className={selfInfoCss.reAccountBar}>
                <div className={selfInfoCss.reAccountInfoBar}>
                    <div className={selfInfoCss.reCircle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.reAccountImg}></img>
                    </div>
                    <div className={selfInfoCss.reAccountIdBar}>
                        <span className={selfInfoCss.reAccountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.reAccountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.reAccountFollow}>追蹤</div>
            </div>
            <div className={selfInfoCss.reAccountBar}>
                <div className={selfInfoCss.reAccountInfoBar}>
                    <div className={selfInfoCss.reCircle}>
                        <img src={accountImg} alt='accountImg' className={selfInfoCss.reAccountImg}></img>
                    </div>
                    <div className={selfInfoCss.reAccountIdBar}>
                        <span className={selfInfoCss.reAccountId}>ryanhsu7936</span>
                        <span className={selfInfoCss.reAccountUserName}>Ryan Hsu</span>
                    </div>
                </div>
                <div className={selfInfoCss.reAccountFollow}>追蹤</div>
            </div>
            <div className={selfInfoCss.aboutBar}>
                <div className={selfInfoCss.aboutDiv}>
                    <div className={selfInfoCss.aboutSpan}>關於</div> 
                    <div className={selfInfoCss.aboutSpan}>使用說明</div>
                    <div className={selfInfoCss.aboutSpan}>新聞稿</div>
                    <div className={selfInfoCss.aboutSpan}>API</div>
                    <div className={selfInfoCss.aboutSpan}>工作機會</div>
                    <div className={selfInfoCss.aboutSpan}>隱私</div>
                    <div className={selfInfoCss.aboutSpan}>使用條款</div>
                    <div className={selfInfoCss.aboutSpan}>使用條款</div>
                    <div className={selfInfoCss.aboutSpan}>地點</div>
                    <div className={selfInfoCss.aboutSpan}>語言</div>
                </div>
            </div>
            <div className={selfInfoCss.copyRight}>© 2022INSTAGRAM FROM META</div>
        </div>
    )


}


export default SelfInfo