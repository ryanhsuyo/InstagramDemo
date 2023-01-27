import React from "react";
import Header from "../components/header";
import VideoCom from "../components/videoCom";
import videoCss from '../pages/video.module.css'



function Video(){
    return (
        <>  
            <div className={videoCss.outLine}>

                <Header/>
                <div className={videoCss.videoOutLine}>
                    <VideoCom/>
                </div>
            </div>
        </>
    )
}

export default Video