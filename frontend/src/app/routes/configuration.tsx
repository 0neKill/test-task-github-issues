import { Suspense, lazy, type FC } from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { Spin } from 'antd';

import { Routes } from '@/shared/utils/constants';

const Main = lazy(() => import('../../pages/main/ui/main'));
const Status = lazy(() => import('../../pages/status/ui/status'));
const Error = lazy(() => import('../../pages/404/ui/error'));
const Default = lazy(() => import('../../pages/main/ui/default'));
const Issue = lazy(() => import('../../pages/issue/ui/issue'));


const configuration: RouteObject[] = [
   {
      path: Routes.MAIN,
      element: <Main />,
      errorElement: <Error />,
      children: [
         {
            path: Routes.MAIN,
            element: <Default />,
            children: [
               {
                  path: Routes.ISSUE,
                  element: <Issue />,
               },
            ],
         },
         {
            path: Routes.STATISTIC,
            element: <Suspense fallback={<Spin size='large' />}><Status /></Suspense>,
         },
      ],
   },
   {},
];

export const RouterConfiguration: FC<unknown> = () => (
   <Suspense fallback={<Spin size='large' />}>
      <RouterProvider router={createBrowserRouter(configuration)} />
   </Suspense>
);