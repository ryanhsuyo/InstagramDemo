import React from 'react'
import uploadIcon from '../assets/icon/upload.png'
import closeIcon from '../assets/icon/close.png'
import caCss from './createArticle.module.css'
import { useState,useRef } from 'react'

export default function CreateArticle(props){
    const { onClose } = props;
    const [selectFile ,setSelectedFile] = useState(null);
    const dropRef = useRef(null)
    const inputRef = useRef(null);
   
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleDrop = (event) => {
        event.preventDefault();
        if(event.dataTransfer && event.dataTransfer.files[0]){
            setSelectedFile(event.dataTransfer.files[0])
        }
    }
    const handleDragOver = (event) => {
        event.preventDefault();
    }
    const triggerInputClick = () => {
        inputRef.current.click();
    };
    return (
        <>
            <div className={caCss.outLine}
                onDrop = {handleDrop}
                onDragOver = {handleDragOver}
                ref={dropRef}
            >
                <div onClick={onClose} className={caCss.test}>
                    <img className={caCss.closeIconImg} src={closeIcon} alt="closeIcon"></img>
                </div>
                <div className={caCss.divOutLine}>
                    <div className={caCss.div}>

                        <div className={caCss.title}>建立新貼文</div>
                        <div className={caCss.bottomBar}  onDrop={(e) => {
                            e.preventDefault();
                            handleFileSelect(e);
                            }}
                            onDragOver={(e) => {
                                e.preventDefault();
                            }}>
                        <div className={caCss.uploadBar}>
                            <img className={caCss.uploadIconImg} alt="uploadIconImg" src={uploadIcon} />
                            <div className={caCss.uploadContent}>將相片和影片拖曳到這裡</div>
                            <button className={caCss.uploadBtn} onClick={triggerInputClick}>從電腦選擇</button>
                            <input
                                    type="file"
                                    onChange={handleFileSelect}
                                    style={{ display: "none" }}
                                    ref={inputRef}
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
      
        </>
    // ):"";
    )
}

