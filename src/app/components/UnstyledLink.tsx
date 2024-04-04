import Link from 'next/link';
import { ComponentProps } from 'react';
import styles from './UnstyledLink.module.scss';

export const UnstyledLink = ({
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link className={styles.wrapper} {...props}>
      {children}
    </Link>
  );
};
