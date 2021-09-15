import React from 'react'
import './Navbar.scss'
import {Arrow, ViewArrow, InputSearch, Notification} from '../../common/Icons'
import AccountImage from '../../../assets/img/account-image.png'
import Profil from './Profil'
import ConnectedImage from '../../../assets/img/Navbar/orginateur-portable2.jpg'

const Navbar = () => {
    return(
        <div className="navbarMain">

            <div className="left">
                <Profil />
            </div>

            <div className="right">

            </div>

        </div>
    )
}

export default Navbar
{/* <div className="left">
    <Arrow />
    
    <div className="account">
        <img src={AccountImage} alt=""/>
        <div className="account-info">
            <h4 className="w700 s16">Erza Miller</h4>
            <p className="w400">erza.miller@email.com</p>
        </div>
        <ViewArrow />
        <p></p>
    </div>

    <div className="search">
        <label>
            <input type="text" placeholder="Search..." />
        </label>
    </div>
</div>

<div className="right">
    <div className="connected">
        <p className="point"></p>
        <p className="online w700 s12">ONLINE</p>
    </div>
    <div className="profil">
        <Profil image={ConnectedImage} position="4" />
        <Profil image={ConnectedImage} position="3" />
        <Profil image={ConnectedImage} position="2" />
        <Profil image={ConnectedImage} position="1" />
    </div>
    <p></p>
    <Notification />
</div> */}