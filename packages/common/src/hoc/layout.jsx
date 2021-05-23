import React from 'react';

export const withLayout = (Component) => {
  if (Component.Layout) {
    const Layout = Component.Layout;
    const layoutProps = Component.layoutProps || {};

    const WrappedLayout = withLayout(Layout);

    return ({ children, ...props }) => (
      <WrappedLayout {...layoutProps}>
        <Component {...props}>{children}</Component>
      </WrappedLayout>
    );
  }

  return Component;
};
