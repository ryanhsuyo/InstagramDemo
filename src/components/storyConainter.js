import React from "react";
import storyConainterCss from './storyConainter.module.css'
import story1 from '../assets/120202096_163359345457628_4859298289785642314_n.jpg'
import story2 from '../assets/132198748_151066253140095_982145530541761904_n.jpg'
// import story3 from '../assets/317764400_587276036446246_5853634600037888578_n.jpg'
// import story4 from '../assets/45824477_297090387606576_1218145885108813355_n.jpg'
// import story5 from '../assets/49933965_322787408331313_917593026856593197_n.jpg'
// import story6 from '../assets/66417772_104204547491684_7227974457140046308_n.jpg'
// import story7 from '../assets/67477037_506679609873914_72883166936485679_n.jpg'
import nextIcon from '../assets/icon/next.png'


function storyConainter(){
    return (
        <div className={storyConainterCss.outLine}>
            <div >

            </div>
            <ul className={storyConainterCss.ul}>
                <li className={storyConainterCss.nonLi}></li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story1} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                    </div>
                </li>
                <li className={storyConainterCss.li}>
                    <div className={storyConainterCss.liCard}>
                        <div className={storyConainterCss.liImgConainter}>
                            <div className={storyConainterCss.outCircle}>
                                <img className={storyConainterCss.liImg} src={story2} alt="story1"></img>
                            </div>
                        </div>
                        <span className={storyConainterCss.liSpan}>ʕ •ᴥ•ʔ我</span>
                        <div className={storyConainterCss.moreBtn}>
                            <img className={storyConainterCss.nextIcon} src={nextIcon} alt="nextIcon"></img>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
    )

}

export default storyConainter