import React from 'react'
import './BottomSideBar.scss'
import Question from '../../../../assets/img/questionLogo.svg'

const BottomSideBar = () => {
    return(
        <div className="bottomSideBar">
            <img src={Question} alt=""/>
        </div>
    )
} 

export default BottomSideBar