import React from "react";
import relevantAccountCss from './relevantAccount.module.css'
import accout1 from '../assets/avaterImg/ni.jpg'
import accout2 from '../assets/avaterImg/mimi.jpg'
import moreArrow from '../assets/icon/next.png'



function RelevantAccount(){
    return(
        <div className={relevantAccountCss.outLine}>
            <header className={relevantAccountCss.header}>
                <span>相關帳號</span>
                <span>查看全部</span>
            </header>

            <ul className={relevantAccountCss.ul}>
                <li></li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout1} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>niny1212_</div>
                                <div className={relevantAccountCss.name}>阿倪</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout2} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>yulihong22</div>
                                <div className={relevantAccountCss.name}>咪咪蛋</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout2} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>yulihong22</div>
                                <div className={relevantAccountCss.name}>咪咪蛋</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout2} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>yulihong22</div>
                                <div className={relevantAccountCss.name}>咪咪蛋</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout2} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>yulihong22</div>
                                <div className={relevantAccountCss.name}>咪咪蛋</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <li className={relevantAccountCss.li}>
                    <div className={relevantAccountCss.cardOut}>
                        <div className={relevantAccountCss.cardPad}>
                            <div className={relevantAccountCss.cardImg}>
                                <img className={relevantAccountCss.img} src={accout2} alt="img"></img>
                            </div>
                            <div className={relevantAccountCss.content}>
                                <div className={relevantAccountCss.accout}>yulihong22</div>
                                <div className={relevantAccountCss.name}>咪咪蛋</div>

                            </div>
                            <button className={relevantAccountCss.btn}>追蹤</button>
                        </div>
                    </div>
                </li>
                <img className={relevantAccountCss.more} src={moreArrow} alt="moreArrow"></img>
            </ul>
        </div>
    )
}

export default RelevantAccount