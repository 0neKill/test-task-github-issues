import { MutableRefObject, useCallback, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AsyncIssieViewFetchProps, useDispatchActionIssue } from '@/entities/issue';
import { useNotification } from '@/shared/libs';
import {
   getCommentView, getIssueView, getSelectActiveError, getSelectActiveLoading,
} from '@/entities/issue/model/selectors';

export const useGetViewIssue = () => {
   const { asyncIssieViewFetch, setErrorActive } = useDispatchActionIssue();

   const issue = useSelector(getIssueView);
   const loading = useSelector(getSelectActiveLoading);
   const error = useSelector(getSelectActiveError);
   const comments = useSelector(getCommentView);
   const { id,userName,repoName } = useParams();
   const { api } = useNotification();
   const hasFirstFetch = useRef(true) as MutableRefObject<boolean>;

   const performance = useCallback(({ number, userName, repoName }: AsyncIssieViewFetchProps) => {
      return asyncIssieViewFetch({ number, userName, repoName });
   }, [asyncIssieViewFetch]);

   useEffect(() => {
      if (id && userName && repoName &&hasFirstFetch.current) {
         id && performance({ number: +id, userName, repoName });
      }
      hasFirstFetch.current = false;
   }, [id, performance, userName, repoName]);

   useEffect(() => {
      if (error) {
         api.error({
            message: error,
         });
      }
      setErrorActive('');
   }, [error, api, setErrorActive]);


   return useMemo(() => (
      { issue, loading, comments }
   ), [issue, loading, comments]);

};