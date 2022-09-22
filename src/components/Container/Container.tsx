import React from 'react';
import classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export default function Container({ children, fluid, className: classNameInput, ...rest }: IProps) {
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
