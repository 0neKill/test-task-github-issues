import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import './styles.scss';

type ContainerProps = FC<{
   className?: string
   children: ReactNode;
}>

export const Container: ContainerProps = ({ className, children }) => (
   <div className={clsx('container', className)}>
      {children}
   </div>
);
