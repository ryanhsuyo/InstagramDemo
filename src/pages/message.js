import React from "react";
import Header from "../components/header";
// import Footer from '../components/footer'
import Chat from '../components/chat'
import messageCss from './message.module.css'

function Message(){
    return (
        <>
            <div className={messageCss.outLine}>

                <Header />
                <Chat />
            </div>
        {/* <Footer /> */}
        </>
    )
}

export  default Message