import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
}

from 'react-router-dom';
import PagesPromotionSeach from './Promotion/Search/Search';

const Root = () => {
    return(
        <Router>
            <Switch>
            <Route path="/" component={PagesPromotionSeach}/>
            </Switch>
        </Router>
    )
}
export default Root;