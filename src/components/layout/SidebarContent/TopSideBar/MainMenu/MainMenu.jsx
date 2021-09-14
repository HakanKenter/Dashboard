import React from 'react'
import './MainMenu.scss'
import Heading from '../SideBarComponents/heading'
import DashboardLogo from "../../../../../assets/img/dashboardLogo.svg"
import InboxLogo from "../../../../../assets/img/inboxLogo.svg"

const DashboardLogoStyles = {
    marginRight: "16px",
    width: "20px",
    height: "18px"
};

const InboxLogoStyles = {
    marginRight: "12px",
    width: "24px",
    height: "24px"
};


const MainMenu = () => {
    return(
        <div className="mainMenu">
            <h1 className="menu-title-main">MAIN MENU</h1>
            <Heading logo={DashboardLogo} styleValue={DashboardLogoStyles} selectValue="true" title="Dashboard" />
            <Heading logo={InboxLogo} styleValue={InboxLogoStyles} notifStatut="true" title="Inbox" />
        </div>
    )
}

export default MainMenu