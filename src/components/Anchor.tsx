import * as React from 'react';

export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Anchor({ target, rel, children, ...rest }: IProps) {
  const props: IProps = { ...rest };
  props.target = target ?? '_blank';
  props.rel = rel ?? 'noopener noreferrer';
  return <a {...props}>{children}</a>;
}
