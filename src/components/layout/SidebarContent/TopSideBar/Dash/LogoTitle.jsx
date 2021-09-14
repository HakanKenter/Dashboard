import React from 'react'
import './LogoTitle.scss'
import Img from '../../../../../assets/img/Rectangle.svg'

const LogoTitle = () => {
    return(
        <div className="logoTitle">
            <img src={Img} alt=""/>
            <h1>Dash</h1>
        </div>
    )
}

export default LogoTitle