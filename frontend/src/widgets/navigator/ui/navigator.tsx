import type { FC } from 'react';
import { clsx } from 'clsx';
import { LinkButton } from '@/shared/ui';
import { Routes } from '@/shared/utils/constants';

type NavigatorProps = FC<{
   className?: string
}>

export const Navigator: NavigatorProps = ({ className }) => {
   return (
      <div className={clsx('navigator', className)}>
         <LinkButton to={Routes.MAIN}>Main</LinkButton>
         <LinkButton to={Routes.STATISTIC}>Statistic</LinkButton>
      </div>
   );
};