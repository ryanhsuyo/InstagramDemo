import React from "react";
import searchCss from './serach.module.css'



function Search() {
    return (
        <>
            <div className={searchCss.outLine} >
                <div>
                    <div>
                        <span>搜尋</span>
                        <div>
                            <input placeholder="搜尋">
                                <button>
                                </button>
                            </input>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className={searchCss.bottomFlex}>
                            <div>最近</div>
                            <div>全部清除</div>
                            {/* 這邊做一個component */}
                            <div className={searchCss.searchName}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Search