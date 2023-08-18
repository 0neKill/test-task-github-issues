import { useContext, useMemo } from 'react';
import { NotificationContext } from '../provider';


export const useNotification = () => {
   const { api } = useContext(NotificationContext);
   return useMemo(() => ({ api }), [api]);
};