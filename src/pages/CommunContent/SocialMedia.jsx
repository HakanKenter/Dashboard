import React, {useState, useEffect} from 'react'
import './SocialMedia.scss'
import Facebook from "../../assets/img/SocialMedia/facebook.png"
import Instagram from "../../assets/img/SocialMedia/instagram.png"
import Linkedin from "../../assets/img/SocialMedia/linkedin.png"
import Youtube from "../../assets/img/SocialMedia/youtube.png"

const SocialMedia = ({reseau, pourcentArray, setPourcentArray, pourcent, separator = false}) => {
    const [logo, setLogo] = useState()
    const [reseauTextStyle, setReseauTextStyle] = useState()
    const [reseauLogoStyle, setReseauLogoStyle] = useState()
    // const [totalPourcent, setTotalPourcent] = useState([])
    
    // setPourcentArray(pourcent)
   

    // console.log(pourcent)
    useEffect(() => {
        setPourcentArray({...pourcentArray, pourcent})
        // setPourcentArray((oldState) => {
        //     const newArr = [...oldState]
        //     newArr.push(pourcent)
        //     return newArr
        // })
        // newArr.push(pourcent)
        // setTotalPourcent({ myArray: [...totalPourcent.myArray, 'new value'] }) 
        
        
        
        if(reseau == "Facebook"){
            // setTotalPourcent((oldState) => {
            //     const newArr = [...oldState]
            //     newArr.push(pourcent)
            //     return newArr
            // })
            // setTotalPourcent([...totalPourcent, {
            //     pourcent
            // }])
            setLogo(Facebook)
            setReseauTextStyle({
                color: "#017EFA",
                marginTop: "3px"
            })
            setReseauLogoStyle({
                marginRight: "10px",
                width: "18px", 
                height: "18px",
                marginLeft: "28px"
            })
        } if(reseau === "Instagram"){
            setTotalPourcent([...totalPourcent, {
                pourcent
            }])
            setLogo(Instagram)
            setReseauTextStyle({
                color: "#FD1F9B",
                marginTop: "4px"
            })
            setReseauLogoStyle({
                marginRight: "8px",
                width: "22px", 
                height: "22px",
                marginLeft: "27px"
            })
        } if(reseau === "Linkedin"){
            setLogo(Linkedin)
            setReseauTextStyle({
                color: "#007AB5",
                marginTop: "3px"
            })
            setReseauLogoStyle({
                marginRight: "7px",
                width: "22px", 
                height: "18px",
                marginLeft: "29px"
            })
        } if(reseau === "Youtube"){
            setLogo(Youtube)
            setReseauTextStyle({
                color: "#FF0000",
                marginTop: "1px"
            })
            setReseauLogoStyle({
                marginRight: "9px",
                width: "21px", 
                height: "15px",
                marginLeft: "27px"
            })
        } 
    }, [])
    

    // console.log(newArr)
    console.log(pourcentArray)

    return (
        <div className="socialMedia">
            <div className="socialbBloc">
                <div className="left">
                    <img src={logo} style={reseauLogoStyle} alt=""/>    
                    <h1 className="facebook s14 w600" style={reseauTextStyle}>{reseau}</h1>
                </div>
                <div className="right">
                    <div className="visitor s14 w400">{pourcent} Visitor</div>
                    <div className="pourcents s14 w400">12%</div>
                </div>
            </div>
            {
                separator && 
                <div className="separator"></div>
            }
        </div>
    )
}

export default SocialMedia
