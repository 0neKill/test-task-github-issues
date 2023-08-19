import { FC } from 'react';

import { RouterConfiguration } from '@/app/routes';

import { withHoc } from './hoc';

export const App = withHoc(() => {
   return <RouterConfiguration />;
}) as FC<unknown>;

