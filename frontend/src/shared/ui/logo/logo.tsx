import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import './logo.scss';

type LogoProps = FC<{
   image?: ReactNode,
   className?: string
   titleLeft: string,
   titleRight: string,
}>

export const Logo: LogoProps = ({ image, className, titleLeft, titleRight }) => (
   <div className={clsx('logo', className)}>
      {image}
      <div className='logo__title'>
         <span className='logo__title--left'>{titleLeft}</span>
         <span className='logo__title--right'>{titleRight}</span>
      </div>
   </div>
);