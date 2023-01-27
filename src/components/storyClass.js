import React from "react";
import storyClassCss from './storyClass.module.css'
import tagIcon from '../assets/icon/tag.png'
import tableIcon from '../assets/icon/table-grid-of-nine-squares.png'
import videoIcon from '../assets/icon/video.png'

function StoryClass(){
    return (
        <div className={storyClassCss.outLine}>
            <div className={storyClassCss.topLine}>
            </div>
                <div className={storyClassCss.inLine}>
                    <ul className={storyClassCss.ul}>
                        <li className={storyClassCss.li}>
                            <img className={storyClassCss.tableImg} src={tableIcon} alt="tableIcon"></img>
                            <span>貼文</span>
                        </li>
                        <li className={storyClassCss.li}>
                            <img className={storyClassCss.videoImg} src={videoIcon} alt="videoIcon"></img>
                            <span>Reels</span>
                        </li>
                        <li className={storyClassCss.li}>
                            <img className={storyClassCss.tagImg} src={tagIcon} alt="tagIcon"></img>
                            <span>已標注</span>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default StoryClass