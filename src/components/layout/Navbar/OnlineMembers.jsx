import React from 'react'
import './OnlineMembers.scss'

import profilPicture from '../../../assets/img/Navbar/orginateur-portable2.jpg'

const OnlineMembers = () => {
    return (
        <div className="onlineMembers">
            <div className="text">
                <div className="round"></div>
                <span className="s12 w700">ONLINE</span>
            </div>

            <div className="members">

                <MemberPhoto image={profilPicture} />
                <MemberPhoto image={profilPicture} />
                <MemberPhoto image={profilPicture} />
                <MemberPhoto image={profilPicture} />

            </div>
        </div>
    )
}

//Composant intérieur !
const MemberPhoto = ({image}) => {
    return(
        <div className="memberPhoto">
            <img src={image} alt=""/>
        </div>
    )
}

export default OnlineMembers
