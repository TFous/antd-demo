import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Arms from './routes/Arms';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/page_arms" component={Arms} />
      <Route path="/page_items" component={Arms} />
    </Router>
  );
}

export default RouterConfig;
