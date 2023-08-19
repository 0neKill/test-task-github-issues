import { TextButton, useDispatchActionIssue, useGetIssue } from '@/entities/issue';
import { FC, useEffect } from 'react';
import { useNotification } from '@/shared/libs';

type SearchIssuesProps = FC<{
   hasValue: boolean,
}>


export const SearchIssues: SearchIssuesProps = ({ hasValue }) => {
   const { performance, loading, error } = useGetIssue();
   const { setError } = useDispatchActionIssue();
   const { api } = useNotification();

   useEffect(() => {
      if (error) {
         api.error({
            message: error,
         });
         setError('');
      }
   }, [error, api, setError]);

   const handlerOnSearch = () => {
      if (hasValue) {
         performance();
      }
   };

   return (
      <TextButton title='Search' onClick={handlerOnSearch} loading={loading} disabled={!hasValue} />
   );
};