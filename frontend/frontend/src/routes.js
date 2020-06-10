import React from 'react';

import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';

import AuthForms from './components/AuthForms';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/blog/:articleID' component={ArticleDetail} />
        <Route exact path='/auth' component={AuthForms} />
    </div>

);

export default BaseRouter;