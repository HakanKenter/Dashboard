import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UnauthentificatedRoute from './routes/UnauthentificatedRoute'
import AuthentificatedRoute from './routes/AuthentificatedRoute'
import Settings from '../pages/Settings'
import Home from '../pages/Home'

const Router = () => {
    const auth = true

    return(
        <BrowserRouter>
            
            <Switch>

                <UnauthentificatedRoute 
                    exact 
                    path="/"
                    auth={auth}
                    C={Home}
                    layout="dashboard"
                />
                <UnauthentificatedRoute 
                    page='/settings'
                    auth={auth}
                    C={Settings}
                    layout="dashboard"
                />

            </Switch>

        </BrowserRouter>
    )
}

export default Router