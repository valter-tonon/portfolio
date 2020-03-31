import React from 'react'
import { Switch , Route} from 'react-router-dom'

import Home from './pages/Home'
import Skills from './pages/Skills'
import Experiencias from './pages/Experiencias'
import Contratar from './pages/Contratar'

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/experiencias" component={Experiencias}/>
            <Route path="/contratar" component={Contratar}/>

        </Switch>
    )
}
export default Routes