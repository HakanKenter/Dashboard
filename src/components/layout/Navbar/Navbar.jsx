import React from 'react'
import './Navbar.scss'
import {Arrow2, ViewArrow, InputSearch, Notification} from '../../common/Icons'
import AccountImage from '../../../assets/img/account-image.png'
import Profil from './Profil'
import ConnectedImage from '../../../assets/img/Navbar/orginateur-portable2.jpg'
import Search from './Search'
import OnlineMembers from './OnlineMembers'
import ButtonNotification from './ButtonNotification'

const Navbar = () => {
    return(
        <div className="navbarMain">

            <div className="left">

                <Profil />
                <div className="separator"></div>
                <Search />

            </div>

            <div className="right">

                <OnlineMembers />
                <div className="separator"></div>
                <ButtonNotification notification={true} />

            </div>

        </div>
    )
}

export default Navbar