import * as React from 'react';

// eslint-disable-next-line
export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Anchor({ target, rel, children, ...rest }: IProps) {
  const props: IProps = { ...rest }
  const hasHash = props.href.includes('#')
  props.target = hasHash ? '' : (target ?? '_blank')
  props.rel = hasHash ? '' : (rel ?? 'noopener noreferrer')
  return <a {...props}>{children}</a>
}
