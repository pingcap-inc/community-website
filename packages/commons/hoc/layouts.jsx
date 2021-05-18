import React from 'react';

export const withLayouts = (Component) => {
  if (Component.Layout) {
    const Layout = Component.Layout;
    const layoutProps = Component.layoutProps || {};

    const WrappedLayout = withLayouts(Layout);

    return ({ children, ...props }) => (
      <WrappedLayout {...layoutProps}>
        <Component {...props}>
          {children}
        </Component>
      </WrappedLayout>
    );
  }
  return Component;
};
