import React from 'react'
import './Profil.scss'
import profilPicture from '../../../assets/img/Navbar/orginateur-portable2.jpg'

const Profil = () => {
    return (
        <div className="navbarProfil">
            <div className="image">
                <img src={profilPicture} alt="Profil picture"/>
            </div>

            <div className="infos">
                <h1 className="s16 w700">Erza Miller</h1>
                <p className="s12 w400">erza.miller@email.com</p>
            </div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.293 0.292999L5.99997 4.586L1.70697 0.292999L0.292969 1.707L5.99997 7.414L11.707 1.707L10.293 0.292999Z" fill="#1C1F37"/>
                </svg>
        </div>
    )
}

export default Profil
