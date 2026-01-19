import React from 'react';
import Link from 'next/link';
import Anchor from '~/components/Anchor';

export default function MyLink({ to, href, children, ...rest }) {
  return href ? (
    <Anchor {...rest} href={href}>
      {children}
    </Anchor>
  ) : (
    <Link {...rest} href={to}>
      {children}
    </Link>
  );
}
