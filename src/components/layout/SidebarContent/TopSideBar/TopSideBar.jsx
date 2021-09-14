import React from 'react'
import './TopSideBar.scss'
import LogoTitle from './Dash/LogoTitle'
import MainMenu from './MainMenu/MainMenu'
import Workspace from './Workspace/Workspace'
import General from './General/General'

const TopSideBar = () => {
    return(
        <div className="topSideBar">
            <LogoTitle />
            <MainMenu />
            <Workspace />
            <General />
        </div>
    )
}

export default TopSideBar
