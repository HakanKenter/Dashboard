import React from 'react'
import {Route} from 'react-router-dom'
import Layout from '../../layout/index'

// Ici on va mettre {...rest} pour recupérer toute les props d'un coup
// A part "C" qui sera récupérer différement
const UnauthentificatedRoute = ({C, layout, auth, ...rest}) => {
    return(
        <Route {...rest}>
            <Layout name={layout}>
                <C />
            </Layout>
            {/* <C /> */}
        </Route>
    )
}

export default UnauthentificatedRoute