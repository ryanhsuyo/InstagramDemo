import React from "react";
import storyPostCardCss from './storyPostCard.module.css'
import photo1 from '../assets/card1.jpg'
import photo2 from '../assets/card2.jpg'
import photo3 from '../assets/card3.jpg'
function StoryPostCard() {
    return(
        <div className={storyPostCardCss.outLine}>
            <div className={storyPostCardCss.row}>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo1} alt="photo1"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo2} alt="photo2"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo3} alt="photo3"></img>
                </div>
            </div>
            <div className={storyPostCardCss.row}>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo1} alt="photo1"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo2} alt="photo2"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo3} alt="photo3"></img>
                </div>
            </div>
            <div className={storyPostCardCss.row}>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo1} alt="photo1"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo2} alt="photo2"></img>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo3} alt="photo3"></img>
                </div>
            </div>
            <div className={storyPostCardCss.rowLast}>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo1} alt="photo1"></img>
                </div>
                <div className={storyPostCardCss.card11}>
                    <img className={storyPostCardCss.img} src={photo2} alt="photo2"></img>
                    <div className={storyPostCardCss.buttonDiv}>
                        <button className={storyPostCardCss.more}>顯示更多mitsukirain的貼文</button>
                    </div>
                </div>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo3} alt="photo3"></img>
                </div>
            </div>
            {/* <div className={storyPostCardCss.row}>
                <div className={storyPostCardCss.card}>
                    <img className={storyPostCardCss.img} src={photo1} alt="photo1"></img>
                </div>
              
            </div> */}
        </div>
    )
}

export default StoryPostCard