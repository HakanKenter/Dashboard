import React from 'react'
import './BlocContent.scss'

const blocContent = ({blocHeight, blocWidth, children}) => {
    return (
        <div className="blocContent" style={{height: blocHeight+"px", width: blocWidth+"px"}}>
            {children}
        </div>
    )
}

export default blocContent
