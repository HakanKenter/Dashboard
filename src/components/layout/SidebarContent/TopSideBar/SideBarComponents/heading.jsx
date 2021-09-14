import React from 'react'
import notifLogo from '../../../../../assets/img/notifLogo.svg'
import './heading.scss'

const Heading = ({logo, title, styleValue, selectValue = "false", notifStatut = false}) => {

    return(
        <div className={(selectValue == "true") ? "heading" : "heading-inactive" }>
            <img style={styleValue} src={logo} alt=""/>
            <div className="title-bloc">
                <h3>{title}</h3>
                {
                notifStatut &&
                <img src={notifLogo} alt=""/>
                }
            </div>
        </div>
    )
}

export default Heading