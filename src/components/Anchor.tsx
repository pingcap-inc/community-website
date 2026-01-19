import * as React from 'react';

export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isHash?: boolean;
}

export default function Anchor({ target, rel, isHash, href, ...rest }: IProps) {
  const props: IProps = { ...rest };
  //const isInternalLink = rest.href.charAt(0) === '/'
  //const hasHash = props.href.includes('#') && isInternalLink
  props.target = isHash ? '' : target ?? '_blank';
  props.rel = isHash ? '' : rel ?? 'noopener noreferrer';

  // Add path prefix
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    href = '/tidbcommunity' + href;
  }
  props.href = href;
  const children = props.children ?? props.href;
  return <a {...props}>{children}</a>;
}
