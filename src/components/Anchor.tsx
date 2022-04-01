import * as React from 'react';

export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isHash?: boolean;
}

export default function Anchor({ target, rel, children, isHash, ...rest }: IProps) {
  const props: IProps = { ...rest };
  //const isInternalLink = rest.href.charAt(0) === '/'
  //const hasHash = props.href.includes('#') && isInternalLink
  props.target = isHash ? '' : target ?? '_blank';
  props.rel = isHash ? '' : rel ?? 'noopener noreferrer';
  return <a {...props}>{children}</a>;
}
