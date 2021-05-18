import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withLayouts } from 'commons/hoc/layouts';

// https://reactjs.org/docs/code-splitting.html
const pages = import.meta.glob('./pages/**/*/index.page.jsx');
const app = import.meta.globEager('./pages/_app.page.jsx')['./pages/_app.page.jsx'];

let App = ({ children }) => children;
if (app) {
  App = app.default;
}

const PATH_REG = /^\.\/pages(.*)\/index\.page\.jsx$/;

const parsePages = (pages) => {
  // TODO: the result should be ordered by some rules to avoid router masking issues.
  // TODO: handle params pattern. ( by simple replaces /\[([^\]]+)]/ to `:$1`?)
  return Object.entries(pages)
    .map(([path, dynamicComponent]) => {
      const url = PATH_REG.exec(path)[1];
      return {
        url,
        Component: lazy(lazyLayouts(dynamicComponent)),
      };
    });
};

const lazyLayouts = (factory) => {
  return () => factory()
    .then(module => {
      const { default: DefaultComponent, ...rest } = module;
      return {
        default: withLayouts(DefaultComponent),
        ...rest,
      };
    });
};

const pageRoutes = parsePages(pages);

// The page router was used to mock next router dir structure.
const PageRouter = () => {
  return (
    <App>
      <Router>
        <Switch>
          {
            pageRoutes.map(({ url, Component }) => (
              <Route key={url} path={url} exact>
                <Suspense fallback={<div />}>
                  <Component />
                </Suspense>
              </Route>
            ))
          }
        </Switch>
      </Router>
    </App>
  );
};

export default PageRouter;
