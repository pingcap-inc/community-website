import React from 'react';
import classNames from 'classnames';
import MyLink from '~/components/MyLink';

const Button = ({
  as,
  icon,
  className,
  children,
  size,
  type,
  rounded,
  disabled,
  lowerCase,
  block,
  htmlType,
  ...rest
}) => {
  const classNameButton = `Button`;

  size = size && size.length !== 0 ? size : 'medium';
  type = type || 'primary';

  // if lowerCase === false, convert all text to UpperCase, otherwise use lowerCase
  lowerCase = !!lowerCase;
  if (typeof children === 'string') {
    children = lowerCase ? children : children.toUpperCase();
  }

  let TagName = as || 'button';

  // href is outbound link
  if (rest.href) {
    TagName = MyLink;
    rest.target = '_blank';
    rest.rel = 'noopener';
  }

  const props = {
    className: classNames(classNameButton, className, size, type, {
      rounded,
      disabled,
      block,
    }),
    type: htmlType || '',
    ...rest,
  };

  const childNode = (
    <div className={`${classNameButton}-content`}>
      {icon && <div className={classNames(`${classNameButton}-icon`, size)}>{icon}</div>}
      <div className={`${classNameButton}-text`}>{children}</div>
    </div>
  );

  return <TagName {...props}>{childNode}</TagName>;
};

export default Button;
