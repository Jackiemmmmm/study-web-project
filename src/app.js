import React, { lazy, Suspense, Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Route as BasicRoute, Switch, Router, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createBrowserHistory } from 'history';
import NoMatch from '~containers/no-match';
import Layout from '~containers/layout';
import Loading from '~components/loading';
import './fonts/fonts.scss';
import '~common/common.scss';
import store from '~store';

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io'
  uri: '/graphql/proxy'
});

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '~containers/home'));
const Effect = lazy(() => import(/* webpackChunkName: "Effect" */ '~containers/effect'));
const Animate = lazy(() => import(/* webpackChunkName: "Animate" */ '~containers/animate'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ '~containers/login'));

const history = createBrowserHistory();

export class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true, errorMsg: { error, info } });
  }

  render() {
    const { children } = this.props;
    const { error, errorMsg } = this.state;
    if (error) {
      // eslint-disable-next-line no-console
      console.log(errorMsg);
      return <h2>页面出错啦！请稍后再试...</h2>;
    }
    return children;
  }
}

const Route = ({ path, exact, component: ChildComponent }) => (
  <Suspense fallback={<Loading />}>
    <BasicRoute
      exact={exact}
      path={path}
      render={props => {
        return (
          <ErrorBoundary>
            <ChildComponent {...props} />
          </ErrorBoundary>
        );
      }}
    />
  </Suspense>
);

Route.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired
};

const CheckLogin = props => {
  const { location } = props;
  return <Redirect to={{ pathname: '/login', prevPath: location.pathname }} />;
};

CheckLogin.propTypes = {
  location: PropTypes.object.isRequired
};

const RequireLoginRoute = ({ path, exact, component: ChildComponent }) => (
  <Suspense fallback={<Loading />}>
    <BasicRoute
      exact={exact}
      path={path}
      render={props => {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
          return <CheckLogin {...props} />;
        }
        return (
          <ErrorBoundary>
            <ChildComponent {...props} />
          </ErrorBoundary>
        );
      }}
    />
  </Suspense>
);

RequireLoginRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired
};

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/use-effect/:id" component={Effect} />
            <Route exact path="/sale-animate" component={Animate} />
            <BasicRoute component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default hot(App);
