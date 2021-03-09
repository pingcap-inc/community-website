import React from 'react';
import classNames from 'classnames';

export default function Container({ children, fluid, className: classNameInput, ...rest }) {
  const className = 'PingCAPContainer';
  return (
    <div
      className={classNames(className, classNameInput, {
        [`${className}-fluid`]: fluid,
        [`${className}-normal`]: !fluid,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
