import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
// import PropTypes from 'prop-types';
import {
  Route as BasicRoute,
  Switch,
  Router
  // Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import NoMatch from 'containers/no-match';
import Layout from 'containers/layout';
// import Loading from 'components/loading';
import loadable from '@loadable/component';
import 'common/common.css';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ 'containers/home'));

const history = createBrowserHistory();

/**
const Route = ({ path, exact, component: Component }) => (
  <BasicRoute
    exact={exact}
    path={path}
    render={(props) => {
      const { location } = props;
      const loggedIn = localStorage.getItem('loggedIn');
      if (!loggedIn) {
        return <Redirect to={{ pathname: '/', prevPath: location.pathname }} />;
      }
      return <Component {...props} />;
    }}
  />
);
*/

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <BasicRoute exact path="/" component={Home} />
        <BasicRoute component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
);

export default hot(module)(App);
