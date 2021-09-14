import React from 'react'
import './Navbar.scss'
import {Arrow, ViewArrow, InputSearch} from '../../common/Icons'
import AccountImage from '../../../assets/img/account-image.png'

const Navbar = () => {
    return(
        <div className="navbarMain">

            <div className="left">
                <Arrow />
                
                <div className="account">
                    <img src={AccountImage} alt=""/>
                    <div className="account-info">
                        <h4 className="w700 s16">Erza Miller</h4>
                        <p>erza.miller@email.com</p>
                    </div>
                    <ViewArrow />
                    <p></p>
                </div>

                <div className="search">
                    {/* <InputSearch />  */}
                    <label>
                        <input type="text" placeholder="Search..." />
                    </label>
                </div>
            </div>

            <div className="right">

            </div>

        </div>
    )
}

export default Navbar