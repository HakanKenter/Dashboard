import React from 'react'
import './TotalVisitor.scss'
import {PourcentArrow} from '../../components/common/Icons'

const TotalVisitor = () => {
    return (
        <div className="totalVisitor">
            <h1 className="s28 w600">120K</h1>
            <PourcentArrow /> 
            <div className="pourcentNumber s10 w700">12%</div>
            <div className="visitor s10 w400">visitor</div>
        </div>
    )
}

export default TotalVisitor
