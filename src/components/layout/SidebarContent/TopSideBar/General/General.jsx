import React from 'react'
import './General.scss'
import Heading from '../SideBarComponents/heading'
import FileFolder from "../../../../../assets/img/fileFolderLogo.svg"
import Settings from "../../../../../assets/img/settingsLogo.svg"

const FileFolderLogoStyles = {
    marginRight: "16px",
    width: "20px",
    height: "18px"
};

const SettingsLogoStyles = {
    marginRight: "12px",
    width: "24px",
    height: "24px"
};


const General = () => {
    return(
        <div className="mainMenu">
            <h1 className="menu-title-general">General</h1>
            <Heading logo={FileFolder} styleValue={FileFolderLogoStyles} title="File et Folders" />
            <Heading logo={Settings} styleValue={SettingsLogoStyles} title="Settings" />
        </div>
    )
}

export default General