import { withHoc } from './hoc';
import { RouterConfiguration } from '@/app/routes';
import { FC } from 'react';

export const App = withHoc(() => {
   return <RouterConfiguration />;
}) as FC<unknown>;

