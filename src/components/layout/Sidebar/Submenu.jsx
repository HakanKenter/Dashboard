import React from 'react'
import './Submenu.scss'

export const Submenu = ({children, title}) => {
    return (
        <div className="sidebarSubmenu">
            
            <h1 className="s12 w400">{title}</h1>

            <div className="buttonList">
                {children}
            </div>
        </div>
    )
}

export default Submenu
