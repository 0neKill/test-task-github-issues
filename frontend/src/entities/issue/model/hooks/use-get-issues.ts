import { useDispatchActionIssue } from '@/entities/issue';
import { useSelector } from 'react-redux';
import {
   getSearchData,
   getSearchTotalCount,
   getSelectError,
   getSelectIssues,
   getSelectLoading,
} from '@/entities/issue/model/selectors';
import { useCallback, useMemo } from 'react';

export const useGetIssue = () => {
   const { asyncIssueFetch } = useDispatchActionIssue();

   const issues = useSelector(getSelectIssues);
   const loading = useSelector(getSelectLoading);
   const error = useSelector(getSelectError);
   const search = useSelector(getSearchData);
   const totalCount = useSelector(getSearchTotalCount);

   const performance = useCallback((page: number = 1) => {
      return asyncIssueFetch({ ...search, page: page });
   }, [asyncIssueFetch, search]);


   return useMemo(() => (
      { issues, loading, performance, error, totalCount, page: search.page }
   ), [issues, loading, performance, error, totalCount, search.page]);

};