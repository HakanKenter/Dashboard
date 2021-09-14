import React from 'react'
import '../Navbar'
import './Sidebar.scss'
// import TopSideBar from './SidebarContent/TopSideBar/TopSideBar'
// import BottomSideBar from './SidebarContent/BottomSideBar/BottomSideBar'
import Submenu from './Submenu'
import Button from './Button'

import {Chart, Find, Calendar, Folder, Chat, Settings, User, Graph, Question} from '../../common/Icons'

const Sidebar =() => {
    return(
        <div className="sidebarMain">

            <div className="top">
           
                <div className="logo">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#017EFA"/>
                        <path d="M20 10C14.486 10 10 14.486 10 20C10 25.514 14.486 30 20 30C25.514 30 30 25.514 30 20C30 14.486 25.514 10 20 10ZM20 28C15.589 28 12 24.411 12 20C12 15.589 15.589 12 20 12C24.411 12 28 15.589 28 20C28 24.411 24.411 28 20 28Z" fill="white"/>
                        <path d="M21 14L15 21H19V26L25 19H21V14Z" fill="white"/>
                    </svg>

                    <h1 className="s24 w800">Dash</h1>
                </div>

                <div className="menu">

                    <Submenu title="Main menu">
                        <Button title="Dashboard" path="/" Icon= {Chart} />
                        <Button title="Inbox" Icon= {Chat} notification={1}/>
                    </Submenu>

                    <Submenu title="Workspace">
                        <Button title="Accounts" Icon= {User}/>
                        <Button title="Schedule Post" Icon= {Calendar}/>
                        <Button title="Communities" Icon= {Find}/>
                        <Button title="Settings" Icon= {Graph}/>
                    </Submenu>

                    <Submenu title="General">
                        <Button title="File et Folders" Icon= {Folder}/>
                        <Button title="Settings" path="/settings" Icon= {Settings}/>
                    </Submenu>
                </div>
            </div>


            <div className="bottom">
                <div className="needHelp">
                    <div className="questionIcon">
                        <Question />
                    </div>

                    <p className="s14 w400">Need Help width Dash ?</p>

                    <button className="s14 w400">
                        Got to help center
                    </button>

                </div>

            </div>
            
            {/* <TopSideBar />
            <BottomSideBar /> */}

        </div>
    )
}

export default Sidebar