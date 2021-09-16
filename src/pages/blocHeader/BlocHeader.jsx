import React from 'react'
import './BlocHeader.scss'
import {RightArrow} from '../../components/common/Icons'

const BlocHeader = ({title}) => {
    return (
        <div className="blocHeader">

            <div className="left">
                <h1 className="s20 w700">{title}</h1>
            </div>

            <div className="right">
                <p className="w600 s14">See Detail</p>
                <RightArrow />
            </div>
        </div>
    )
}

export default BlocHeader
