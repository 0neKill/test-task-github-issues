import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useDispatchActionIssue } from '@/entities/log';
import { useNotification } from '@/shared/libs';
import {
   getSelectError, getSelectLoading, getSelectLogs,
} from '@/entities/log/model/selectors';

export const useGetViewIssue = () => {
   const { setError, asyncLogFetch } = useDispatchActionIssue();
   const { api } = useNotification();
   const logs = useSelector(getSelectLogs);
   const loading = useSelector(getSelectLoading);
   const error = useSelector(getSelectError);
   const hasFirstFetch = useRef(true) as MutableRefObject<boolean>;


   useEffect(() => {
      if (hasFirstFetch.current) {
         asyncLogFetch(null);
      }
      hasFirstFetch.current = false;
   }, [asyncLogFetch]);

   useEffect(() => {
      if (error) {
         api.error({
            message: error,
         });
      }
      setError('');
   }, [error, setError, api]);

   return useMemo(() => (
      { logs, loading }
   ), [logs, loading]);

};