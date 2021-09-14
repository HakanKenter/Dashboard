import React from 'react'
import './Workspace.scss'
import Heading from '../SideBarComponents/heading'
import SchedulePost from "../../../../../assets/img/schedulePostLogo.svg"
import Communities from "../../../../../assets/img/communitiesLogo.svg"
import Accounts from "../../../../../assets/img/accountLogo.svg"
import Analytics from "../../../../../assets/img/analyticsLogo.svg"

const SchedulePostLogoStyles = {
    marginRight: "11px",
    width: "22px",
    height: "22px"
};

const CommunitiesLogoStyles = {
    marginRight: "14px",
    width: "23px",
    height: "23px"
};

const AccountsLogoStyles = {
    marginRight: "10px",
    width: "24px",
    height: "24px"
};

const AnalyticsLogoStyles = {
    marginRight: "12px",
    width: "22px",
    height: "22px"
};



const Workspace = () => {
    return(
        <div className="mainMenu">
            <h1 className="menu-title-workspace">Workspace</h1>
            <Heading logo={Accounts} styleValue={AccountsLogoStyles} title="Accounts" />
            <Heading logo={SchedulePost} styleValue={SchedulePostLogoStyles} title="Schedule Post" />
            <Heading logo={Communities} styleValue={CommunitiesLogoStyles} title="Communities" />
            <Heading logo={Analytics} styleValue={AnalyticsLogoStyles} title="Analytics" />
        </div>
    )
}

export default Workspace