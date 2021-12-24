import React from 'react';
import Link from 'next/link';

export default function MyLink({ to, href, children, ...rest }) {
  return href ? (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link {...rest} href={to}>
      {children}
    </Link>
  );
}
