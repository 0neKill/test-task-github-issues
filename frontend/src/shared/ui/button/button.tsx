import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

import './styles.scss';

type LinkButtonProps = FC<{
   to: string,
   className?: string,
   children: ReactNode,
}>

export const LinkButton: LinkButtonProps = ({ to, className, children }) => {
   return (
      <NavLink to={to} className={setCorrectClassName(className)}>
         {children}
      </NavLink>
   );
};

const setCorrectClassName = (className?: string) => ({ isActive }: {
   isActive: boolean
}) => clsx('button', className, { 'active': isActive });
