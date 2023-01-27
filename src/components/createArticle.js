import React from 'react'
import uploadIcon from '../assets/icon/upload.svg'
import closeIcon from '../assets/icon/close.svg'
import caCss from './createArticle.module.css'

export default function CreateArticle(props){
    // return(props.trigger)?(
        return (
        <>
            <div className={caCss.outLine}>
                <img className={caCss.closeIconImg} src={closeIcon} alt="cancel"></img>
                <div className={caCss.divOutLine}>
                    <div className={caCss.div}>

                        <div className={caCss.title}>建立新貼文</div>
                        <div className={caCss.bottomBar}>
                            <div className={caCss.uploadBar}>
                                <img className={caCss.uploadIconImg} alt="uploadIconImg" src={uploadIcon}></img>
                                <div className={caCss.uploadContent}>將相片和影片拖曳到這裡</div>
                                <button className={caCss.uploadBtn}>從電腦選擇</button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
      
        </>
    // ):"";
    )
}

