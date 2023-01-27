import React from "react";
import presentationCss from './presentation.module.css'
import avater1 from '../assets/avaterImg/cat1.jpg'
import avater2 from '../assets/avaterImg/cat2.jpg'
import moreIcon from '../assets/icon/next.png'


function Presentation(){
    return(
        <div className={presentationCss.outLine}>
            <div className={presentationCss.div}>
                <ul className={presentationCss.ul}>
                    <li>
                        <div className={presentationCss.outCircle}>
                            <div className={presentationCss.circle}>
                                <img src={avater1} alt={avater1} className={presentationCss.avaterImg}></img>
                            </div>
                        </div>
                        <span>breey</span>
                    </li>
                    <li className={presentationCss.li}>
                        <div className={presentationCss.outCircle}>
                            <div className={presentationCss.circle}>
                                <img src={avater2} alt="avater2" className={presentationCss.avaterImg}></img>
                            </div>
                        </div>
                        <span>breey</span>
                    </li>
                    <li className={presentationCss.li}>
                        <div className={presentationCss.outCircle}>
                            <div className={presentationCss.circle}>
                                <img src={avater2} alt="avater2" className={presentationCss.avaterImg}></img>
                            </div>
                        </div>
                        <span>breey</span>
                    </li>
                    <li className={presentationCss.li}>
                        <div className={presentationCss.outCircle}>
                            <div className={presentationCss.circle}>
                                <img src={avater2} alt="avater2" className={presentationCss.avaterImg}></img>
                            </div>
                        </div>
                        <span>breey</span>
                    </li>
                    <li className={presentationCss.liLast}>
                        <div className={presentationCss.outCircle}>
                            <div className={presentationCss.circle}>
                                <img src={avater2} alt="avater2" className={presentationCss.avaterImg}></img>
                            </div>
                        </div>
                        <span>breey</span>
                    </li>
                </ul>
                <div className={presentationCss.moreIconDiv}>
                    <img src={moreIcon} alt="moreIcon" className={presentationCss.moreIcon}></img>
                </div>
            </div>

        </div>
    )
}


export default Presentation