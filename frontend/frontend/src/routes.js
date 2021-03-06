import React from 'react';

import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import BookDashboard from './containers/BookDashboard';


import AuthForms from './components/AuthForms';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetail} />
        <Route exact path='/books' component={BookDashboard} />
        <Route exact path='/auth' component={AuthForms} />
    </div>

);

export default BaseRouter;