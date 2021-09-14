import React from 'react'
import './Dashboard.scss'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import Navbar from '../components/layout/Navbar'

const Dashboard = ({children}) => {
    return(
        <div className="dashboardLayout">

            <Sidebar />
            <Navbar />

            <div className="content">
                {children}
            </div>

        </div>
    )
}

export default Dashboard