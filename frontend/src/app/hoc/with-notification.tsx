import type { ReactElement } from 'react';
import { NotificationContextProvider } from '@/shared/libs';


export const withNotification = (children: () => ReactElement) => () => (
   <NotificationContextProvider>
      {children()}
   </NotificationContextProvider>
);