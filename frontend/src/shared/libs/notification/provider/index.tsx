import { createContext, type  ReactElement } from 'react';
import type { NotificationInstance } from 'antd/es/notification/interface';
import { notification } from 'antd';

type NotificationContextType = {
   api: NotificationInstance
}

export const NotificationContext = createContext<NotificationContextType>({} as NotificationContextType);

export const NotificationContextProvider = ({ children }: { children: ReactElement }) => {
   const [api, contextHolder] = notification.useNotification();
   return (
      <NotificationContext.Provider value={{ api }}>
         {contextHolder}
         {children}
      </NotificationContext.Provider>
   );
};