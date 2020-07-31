import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../tab/Home'
import Roster from '../tab/Roster'
import Schedule from '../tab/Schedule'
function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route path='/members' component={Roster} />
                <Route path='/schedule' component={Schedule}/>
            </Switch>
        </main>
    );
}

export default Main;