import type { FC, ReactElement } from 'react';
import { clsx } from 'clsx';

import './layout.scss';

type LayoutProps = FC<{
   className?: string,
   headerContent?: ReactElement,
   bodyContent?: ReactElement,
   children?: FC<ReactElement | null>
}>

export const Layout: LayoutProps = ({ className, bodyContent, headerContent, children }) => {

   const header = headerContent ? (
      <header className={clsx('layout__header', { [`${className}__header`]: !!className })}>
         {children?.(headerContent) ?? headerContent}
      </header>
   ) : null;

   const body = bodyContent ? (
      <div className={clsx('layout__body', { [`${className}__body`]: !!className })}>
         {children?.(bodyContent) ?? bodyContent}
      </div>
   ) : null;

   return (
      <section className={clsx('layout', { [`${className}__layout`]: !!className })}>
         {header}
         {body}
      </section>
   );
};