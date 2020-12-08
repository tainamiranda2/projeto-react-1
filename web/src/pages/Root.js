import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
}

from 'react-router-dom';
import PagesPromotionSeach from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/form/form';

const Root = () => {
    return(
        <Router>
            <Switch>

            <Route path="/create" component={PagesPromotionForm}/>
            <Route path="/edit/:id" component={PagesPromotionForm}/>
            <Route path="/" component={PagesPromotionSeach}/>

            </Switch>
        </Router>
    )
}

export default Root;