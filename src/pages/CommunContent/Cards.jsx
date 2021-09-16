import React from 'react'
import "./Cards.scss"

const Cards = ({month, day, title, subtitle, pourcentState, separator = false}) => {
    return (
        <div className="blockContent">

            <div className="top">
                <div className="calendar">
                    <p className="month w600 s12">{month}</p>
                    <p className="day w600 s18">{day}</p>
                </div>

                <div className="right-text">
                    <h1 className="s16 w600">{title}</h1>
                    <h2 className="s12 w400">{subtitle}</h2>
                </div>
            </div>

            <div className="bottom">
                <ProgressBar progressState={pourcentState} />
            </div>
            {
                separator && 
                <div className="separator"></div>
            }
        </div>
    )
}

const ProgressBar = ({progressState}) => {
    return(
        <div className="subBottom">
            <div className="progressSpace">
                <div className="progressContent" style={{width: progressState+"%"}}>
                </div>
            </div>
            <div className="text s12 w400">{progressState}% Complete</div>
        </div>
    )
}

export default Cards
