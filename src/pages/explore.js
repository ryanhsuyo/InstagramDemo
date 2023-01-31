import React from "react";
import Header from "../components/header";
import ExploreCom from "../components/exploreCom";
import exploreComCss from '../pages/explore.module.css'


function Explore(){
    return (
        <>
            <div className={exploreComCss.outLine}>
                <Header/>
                <ExploreCom/>
            </div>
        </>
    )
}

export default Explore