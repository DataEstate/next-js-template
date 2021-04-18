import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Spa = () => {
  const routePrefix = `spa`;
  return (
    <Router>
      <Switch>
        <Route exact path={`/${routePrefix}`}>
          <>
            <h1>Single Page Home</h1>
            <Link to={`/${routePrefix}/page1`}>Page 1</Link>
          </>
        </Route>
        <Route exact path={`/${routePrefix}/page1`}>
          <>
            <h1>Single Page - Page One</h1>
            <Link to={`/${routePrefix}`}>Home</Link>
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default Spa;
