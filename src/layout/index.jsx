import React from 'react'
import Dashboard from './Dashboard'

const Layout = ({name, children}) => {

    // Quand le composant name est egale a dashboard alors on affiche 
    // le contenu du composant Dashboard
    const Layout = name === "dashboard" && Dashboard

    return(
        <Layout>
            {children}
        </Layout>
    )
}

export default Layout